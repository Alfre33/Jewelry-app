"use server";

import prisma from "@/lib/prisma";
import { sanitize } from "@/lib/sanatizeData";
import bcryptjs from "bcryptjs";
import z from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder los 50 caracteres")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
  lastname: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder los 50 caracteres")
    .refine((val) => sanitize(val) === val, {
      message: "El nombre contiene caracteres no permitidos",
    }),
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

export const registerUser = async (
  name: string,
  lastname: string,
  email: string,
  password: string
) => {
  const validation = userSchema.safeParse({ name, lastname, email, password });
  if (!validation.success) {
    return {
      ok: false,
      status: 400,
      message: "Error en los datos proporcionados",
      errors: validation.error.format(),
    };
  }
  try {
    const validData = validation.data;
    const user = await prisma.user.create({
      data: {
        lastname: validData.lastname,
        name: validData.name,
        email: validData.email.toLowerCase(),
        password: bcryptjs.hashSync(validData.password),
      },
      select: {
        //Para solo regresar estos campos en mi user
        id: true,
        email: true,
        name: true,
      },
    });

    return {
      ok: true,
      status: 200,
      message: "Usuario registrado exitosamente",
      user: user,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      status: 500,
      message: "error al registrar el usuario",
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
