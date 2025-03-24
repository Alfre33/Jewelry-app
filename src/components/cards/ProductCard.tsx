"use client";
import { ProductDB } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MaterialDetail } from "../product/MaterialDetail";

interface Props {
  product: ProductDB;
}

export const ProductCard = ({ product }: Props) => {
  const { price, name, material, slug, JewelImage } = product;
  const shortText = name.length > 18 ? name.substring(0, 20) + " ..." : name;
  const [displayImage, setdisplayImage] = useState(product.JewelImage![0].url);
  const image=JewelImage![1] ? JewelImage![1].url :'https://files.cults3d.com/uploaders/12987658/illustration-file/a4aba994-1e4b-403a-b7b1-a7dcfdb84cbc/Jawel.gif'
  return (
    <Link
      className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200  hover:shadow-xl"
      href={`/jawel/${slug}`}
    >
      <Image
        // src="https://i.imgur.com/5dmBrx6.jpg"
        src={displayImage}
        width={227}
        height={150}
        alt="plant"
        className="h-60 w-full hover:scale-125 md:max-h-44"
        onMouseEnter={() => setdisplayImage(image)}
        onMouseLeave={() => setdisplayImage(JewelImage![0].url)}
      />
      <div className=" py-10 px-5 md:py-6 md:px-3 ">
        <h2 className="font-semibold mb-3">
          {shortText}
        </h2>
        <p className="text-medium text-gray-700 flex justify-between items-center">
        <MaterialDetail material={material}/>
          <span>${price}</span>
        </p>
      </div>
    </Link>
  );
};
