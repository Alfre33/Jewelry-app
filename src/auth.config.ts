import NextAuth, { NextAuthConfig } from "next-auth";
import prisma from "./lib/prisma";
import { z } from "zod";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (!parsedCredentials.success) return (user = null);

        const { email, password } = parsedCredentials.data;

        // logic to verify if the user exists
        user = await prisma.user.findUnique({ where: { email: email } });

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        if (!bcryptjs.compareSync(password, user.password))
          return (user = null);
        // return user object with their profile data
        const { password: passwordDB, ...resto } = user;
        
        return resto;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, credentials, email, profile }) {
      return true;
    },
    async jwt({ token, user, session, profile, account }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
      });
      token.role = dbUser?.role ?? "USER";
      token.id = dbUser?.id ?? "no-uuid";
      return token;
    },
    async session({ session, token, user }) {
      if (session && session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
