"use server";

import prisma from "@/lib/prisma";
interface paginationOptions {
  pageNumber?: number;
  take?: number;
}
export const getAllJawels = async ({
  pageNumber = 1,
  take = 6
}: paginationOptions) => {
  if (isNaN(Number(pageNumber))) pageNumber = 1;
  if (pageNumber < 1) pageNumber = 1;

  try {
    const jawels = await prisma.jewel.findMany({
      take: take,
      skip: (pageNumber - 1) * take,
      include: { JewelImage: true },
    });
    const totalJawels = await prisma.jewel.count();
    const totalPages = Math.ceil(totalJawels / take);
    return {
      ok: true,
      message: "Productos obtenidos correctamente",
      jawels,
      totalPages:totalPages
    };
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: "Error al obtener los productos",
    };
  }
};
