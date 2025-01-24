"use server";
import { signIn } from "@/auth.config";
import { sanitize } from "@/lib/sanatizeData";
import { z } from "zod";

const userSchema = z.object({
  email: z
    .string()
    .email("Formato de correo inválido")
    .max(100, "El correo no puede exceder los 100 caracteres")
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

export const login = async (email: string, password: string) => {
  const validation = userSchema.safeParse({ email, password });
  if (!validation.success) {
    return {
      ok: false,
      status: 400,
      message: "Error en los datos proporcionados",
      errors: validation.error.format(),
    };
  }
  try {
    const result=await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    if (result.error) { return { ok: false, message: "No se pudo iniciar sesión. Ocurrio un error", }; }
    return { ok: true, message: "Bienvenido nuevamente has accedido" };
  } catch (error) {
    console.error("Error en login:", error);
    return {
      ok: false,
      message: "No se pudo iniciar sesión. Por favor, intente más tarde.",
    };
  }
};
