"use server";

import prisma from "@/lib/prisma";

export const getJawelBySlug = async (slug: string) => {
  try {
    const jaweldb = await prisma.jewel.findUnique({ where: { slug: slug },include:{JewelImage: true}})
    return {
      ok: true,
      message: "Producto obtenido correctamente",
      jawel: jaweldb,
    };
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: `Ocurrio un error al obtener el producto con slug ${slug}`,
    };
  }
};
