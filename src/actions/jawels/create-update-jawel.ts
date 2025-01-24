"use server";
import { JawelData } from "@/components";
import { normalizeString } from "@/lib/normalize-slug";
import prisma from "@/lib/prisma";
import { Gender, JewelType, Material } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Configuration
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

const productSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(3).max(255),
  price: z.coerce
    .number()
    .min(0)
    .transform((value) => Number(value.toFixed(2))),
  type: z.nativeEnum(JewelType),
  gender: z.nativeEnum(Gender),
  material: z.nativeEnum(Material),
  description: z.string(),
  inStock: z.coerce
    .number()
    .min(0)
    .transform((value) => Number(value.toFixed(0))),
});

type JawelForm = z.infer<typeof productSchema>;

export const createUpdateProduct = async (formData: JawelData) => {
  const { images, ...restoData } = formData;
  const productParsed = productSchema.safeParse(restoData);
  if (!productParsed.success) {
    console.log(productParsed.error);
    return {
      ok: false,
      message: "La informacion que deseas enviar no es correcta",
    };
  }
  const product = productParsed.data;
  const { id, ...resto } = product;
  try {
    const prismaTx = await prisma.$transaction(async () => {
      let jawel: JawelForm;

      if (id) {
        //Actualizar producto
        jawel = await prisma.jewel.update({
          where: { id: id },
          data: {
            ...resto,
          },
        });
      } else {
        //Crear producto
        jawel = await prisma.jewel.create({
          data: {
            ...resto,
            slug: normalizeString(resto.name),
          },
        });
      }

      //Proceso de carga y guardado de imagenes
      //Recorrer las imagenes y guardarlas
      if (images) {
        //Obtendremos un array con las url de las images ejemplo
        //[http://images.example.com,http://images.example.com]

        const imagesDb = await uploadImagesProducts(images as File[]);

        if (!imagesDb) {
          throw new Error("No se pudo cargar las imagenes");
        }
        // if (imagesDb && imagesDb.length > 0) {
        await prisma.jewelImage.createMany({
          data: imagesDb.map((image) => ({
            jewelId: jawel.id ?? "",
            url: image ?? "",
          })),
        });
        // }
      }

      return {
        jawel: jawel,
      };
    });
    revalidatePath(`/products`);
    revalidatePath(`/product/${normalizeString(product.name)}`);
    revalidatePath(`/jawel/${normalizeString(product.name)}`);
    revalidatePath(`/`);
    
    return {
      ok: true,
      product: prismaTx.jawel,
      message: "Producto actualizado correctamente",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "Error al actualizar el producto",
    };
  }
};

const uploadImagesProducts = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        //Convertimos nuestra imagen en base64 o un string antes de subirlo como file
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");

        return cloudinary.uploader
          .upload(`data:image/avif;base64,${base64Image}`)
          .then((r) => r.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages;
  } catch (error) {
    console.log(error);
    return null;
  }
};
