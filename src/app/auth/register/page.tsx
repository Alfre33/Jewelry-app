"use client";
import { login } from "@/actions/auth/login-user";
import { registerUser } from "@/actions/auth/register-user";
import { Tittle,Alert } from "@/components";
import { sanitize } from "@/lib/sanatizeData";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registrationSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
  lastName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
  email: z
    .string()
    .email("El correo debe ser válido")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
    .regex(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
    .regex(/[0-9]/, "La contraseña debe tener al menos un número")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegisterPage() {
   const [loginMessage, setLoginMessage] = useState<string>("");
    const [status, setStatus] = useState<Boolean>();
    const router=useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema), // Asociamos las validaciones de zod
    mode: "onSubmit",
  });
  const onRegister = async ({
    email,
    name,
    password,
    lastName,
  }: RegistrationFormData) => {
    const { message, ok } = await registerUser(name, lastName, email, password);

      setLoginMessage(message);
      setStatus(ok);
     if(ok) {
      const resp=await login(email,password) 
      resp.ok ? router.replace('/') : "error al iniciar sesion"
    }

  };
  const colorMessage=status ? 'green': 'red';
  return (
    <form
      className="mx-auto max-w-xs flex flex-col"
      onSubmit={handleSubmit(onRegister)}
    >
      <Tittle title="Register" size="3xl"/>
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="name"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        className="mt-4 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="name"
        placeholder="LastName"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && (
        <p className="text-red-500">{errors.lastName.message}</p>
      )}
      <input
        className="mt-4 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        className="mt-4 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <button
        type="submit"
        className="mt-5 tracking-wide font-semibold bg-bronce-600 text-white-500 w-full py-4 rounded-lg hover:bg-bronce-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none text-bronce-100"
      >
        <span className="ml-">Sign In</span>
      </button>
      {loginMessage.length > 1 && (
       <Alert message={loginMessage} status={status} color={colorMessage}/>
        )}
      <div className="flex justify-end text-sm mt-3 text-gray-600 opacity-80">
        <Link href="/auth/login">
          Ya tienes cuenta?
          <span className="underline">Inicia sesion</span>
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
