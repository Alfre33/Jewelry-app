import { ProductDB } from "@/interfaces/product.interface";
import { MaterialDetail } from "./MaterialDetail";
import Link from "next/link";
import { GaleryProduct } from "./GaleryProduct";

interface Props {
  product: ProductDB;
}

export const ProductDetails = ({ product }: Props) => {
  const {
    description,
    gender,
    inStock,
    material,
    name,
    price,
    type,
    JewelImage,
  } = product;
  return (
    <div className={`bg-gray-100 mt-5 `}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <GaleryProduct productImage={JewelImage} />
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800  mb-2">
              {name}
            </h2>
            <p className="text-gray-600  text-sm mb-4">
              {description}
            </p>
            <div className="flex mb-4 justify-between">
              <div className="mr-4 flex flex-col">
                <span className="font-sans text-gray-700  line-through opacity-60">
                  Old price: ${price + 10}
                </span>
                <span className="font-bold text-gray-700 ">
                  Price: ${price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">
                  Stock:
                </span>
                <span className="text-gray-600 ">
                  {inStock}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Material de fabricacion:
                </span>
                <div className="flex items-center mt-2">
                  <MaterialDetail material={material} />
                </div>
              </div>
              <div className="mb-4 flex flex-col items-end">
                <span className="font-bold text-gray-700 ">
                  Tipo de joya:
                </span>
                <div className="flex items-center mt-2">
                  <span className="font-bold text-gray-700  capitalize">
                    {type}
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 ">
                Genero:
              </span>
              <span className="font-bold text-gray-700  capitalize ml-3">
                {gender}
              </span>
            </div>
            <Link
              className="w-1/2 bg-bronce-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-bronce-700"
              href="/"
            >
              Regresar al catalogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
