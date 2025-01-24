"use server";

import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface paginationOptions {
  pageNumber?: number;
  take?: number;
  men: Gender;
}

export const getJawelByMens = async ({
  men,
  pageNumber = 1,
  take = 6,
}: paginationOptions) => {
  if (isNaN(Number(pageNumber))) pageNumber = 1;
  if (pageNumber < 1) pageNumber = 1;

  try {
    const jaweldb = await prisma.jewel.findMany({
      take: take,
      skip: (pageNumber - 1) * take,
      where: { gender: men },
      include: { JewelImage: true },
    });
    const totalJawels = await prisma.jewel.count({where:{gender: men}});
    const totalPages = Math.ceil(totalJawels / take);
    return {
      ok: true,
      message: "Producto obtenido correctamente",
      jawel: jaweldb,
      totalPages
    };
  } catch (error) {
    return {
      ok: false,
      message: `Ocurrio un error al obtener los productos de ${men}`,
    };
  }
};
