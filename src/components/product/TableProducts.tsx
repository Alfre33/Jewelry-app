import { getAllJawels } from "@/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductDB } from "@/interfaces/product.interface";

interface Props{
    jawels:ProductDB[]
}

export const TableProducts = async ({jawels}:Props) => {
  
  return (
    <>
      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full max-w-full px-3 mb-2  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* <!-- card header --> */}
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    Porductos disponibles
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    Revise todos su productos que actualmente estan en
                    existencia
                  </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <Link
                    href="/product/new"
                    className="flex text-[.925rem] bg-bronce-600 text-bronce-100 hover:bg-bronce-800 font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    <IoMdAddCircleOutline className="w-6 h-6 mr-3" />
                    Agregar producto
                  </Link>
                </div>
              </div>
              {/* <!-- end card header --> */}
              {/* <!-- card body  --> */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[120px]">
                          PRODUCTOS
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          MATERIAL
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">PRECIO</th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          STOCK
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          GENERO
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          TIPO
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">
                          MODIFICAR
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jawels?.map((jawel) => (
                        <tr
                          className="border-b border-dashed last:border-b-0 capitalize"
                          key={jawel.id}
                        >
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                <Image
                                  src={jawel.JewelImage![0].url 
                                    ?? 'https://files.cults3d.com/uploaders/12987658/illustration-file/a4aba994-1e4b-403a-b7b1-a7dcfdb84cbc/Jawel.gif'}
                                  className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <div className="flex flex-col justify-start">
                                <Link
                                  href={`/jawel/${jawel.slug}`}
                                  className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:underline"
                                >
                                  {jawel.name}
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 pl-0 text-center">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              {jawel.material}
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                              {jawel.price}
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              {jawel.inStock}
                            </span>
                          </td>
                          <td className="pr-0 text-start">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              {jawel.gender}
                            </span>
                          </td>
                          <td className="pr-0 text-start">
                            <span className="font-semibold text-light-inverse text-md/normal">
                              {jawel.type}
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-center">
                            <div className="flex items-center justify-center p-0 m-0 leading-none shrink-0 gap-2">
                              <Link href={`/product/${jawel.slug}`}>
                                <TbEdit className="w-7 h-7 text-green-900" />
                              </Link>
                              {/* <button 
                            //   onClick={()=> console.log(jawel.id)}
                              >
                              <RiDeleteBin6Line className="w-6 h-6 text-red-500" />
                              </button> */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
