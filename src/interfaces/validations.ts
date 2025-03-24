'use server'
import prisma from '@/lib/prisma';
import { z } from 'zod'; // Librería para validación

// Definir esquema de validación
const pacienteSchema = z.object({
  nombre: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/),
  email: z.string().email(),
  edad: z.number().min(0).max(120),
});

type FormData = z.infer<typeof pacienteSchema>; //Creamos la interface con los datos del esquema

// Validar datos antes de guardarlos
const validarPaciente = (datos: FormData) => {
  return pacienteSchema.safeParse(datos);
};

//Incorrecto
// const resultado = await prisma.$queryRaw(`SELECT * FROM pacientes WHERE email = '${email}'`); 

//Correcto
// const resultadoCorrecto = await prisma.paciente.findFirst({  
//     where: { email: email },
//   });
  

import bcrypt from 'bcryptjs';

const hashPassword = async (password: string) => { //.Forma de hashear password
  return await bcrypt.hash(password, 12);
};

const verifyPassword = async (password: string, hash: string) => { //Forma de verificar la contraseña de la base
  return await bcrypt.compare(password, hash);                     //con la que envia el usuario
};
