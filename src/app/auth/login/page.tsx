"use client";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sanitize } from "@/lib/sanatizeData";
import { login } from "@/actions/auth/login-user";
import { Alert } from "@/components/ui/Alert";
import { useRouter } from "next/navigation";
import { Tittle } from "@/components";

const LoginSchema = z.object({
  email: z
    .string()
    .email("El correo debe ser válido")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
});
type LoginFormData = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [status, setStatus] = useState<Boolean>();
  const router=useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onSubmit",
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    const { message, ok } = await login(email, password);
    setLoginMessage(message);
    setStatus(ok);
    if(ok) router.replace('/')
  };

  const colorMessage = status ? "green" : "red";

  return (
    <form className="mx-auto max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <Tittle title="Login" size="3xl"/>
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <button className="mt-5 tracking-wide font-semibold bg-bronce-600 text-white-500 w-full py-4 rounded-lg hover:bg-bronce-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none text-bronce-100">
        <span className="ml-">Login</span>
      </button>
      {loginMessage.length > 1 && (
        <Alert message={loginMessage} status={status} color={colorMessage} />
      )}
      <div className="flex justify-end text-sm mt-3 text-gray-600 opacity-80">
        <Link href="/auth/register">
          Eres nuevo?
          <span className="underline">Registrate ahora</span>
        </Link>
      </div>
      <p className="mt-6 text-xs text-gray-600 text-center">
        I agree to abide by Jawerly Store
        <a href="#" className="border-b border-gray-500 border-dotted">
          Terms of Service
        </a>
        and its
        <a href="#" className="border-b border-gray-500 border-dotted">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
