import { Gender, JewelType, Material } from "@prisma/client";
import prisma from "../lib/prisma";
import products from "./jawel-data";
async function main() {
  await prisma.jewelImage.deleteMany();
  await prisma.jewel.deleteMany();

  products.forEach(async (product) => {
    const { images, ...restProduct } = product;

    const productDb = await prisma.jewel.create({
      data: {
        gender: restProduct.gender as Gender,
        type: restProduct.type as JewelType,
        description: restProduct.description,
        inStock: restProduct.inStock,
        material: restProduct.material as Material,
        name: restProduct.name,
        price: restProduct.price,
        slug: restProduct.slug,
      },
    });

    const imagesdb = images.map((img) => ({
      url: img,
      jewelId: productDb.id,
    }));

    const imgInsertada = await prisma.jewelImage.createMany({
      data: imagesdb,
    });
  });

  console.log("seed ejecutado correctamente");
}

(() => {
  main();
})();
