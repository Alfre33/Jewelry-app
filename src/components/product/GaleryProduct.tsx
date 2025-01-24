"use client";
import { ProductImage } from "@/interfaces/product.interface";
import Image from "next/image";
import { useState } from "react";

interface Props {
  productImage?: ProductImage[];
}

export const GaleryProduct = ({ productImage }: Props) => {
  
  const [currenlyImage, setCurrenlyImage] = useState(productImage![0].url);
  return (
    <div className="md:flex-1 px-4">
      <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
        <Image
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={250}
          src={currenlyImage}
          alt="Product Image"
        />
      </div>
      <div className="w-28 h-24 flex gap-2 my-4">
        {productImage?.map((image) => (
          <Image
            key={image.id}
            className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-110"
            width={120}
            height={120}
            src={image.url}
            alt={`Product ${image.id}`}
            onClick={() => setCurrenlyImage(image.url)}
          />
        ))}
      </div>
    </div>
  );
};
