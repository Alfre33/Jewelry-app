"use client";
import { generatePaginationNumbers } from "@/lib/GeneratePaginationNumers";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathName);
  }

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    if (pageNumber === "...") {
      return `${pathName}?${params.toString()}`;
    }
    if (+pageNumber <= 0) {
      return `${pathName}`; // return /,/kid,/men,/women
    }
    if (+pageNumber > totalPages) {
      //Next
      return `${pathName}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center text-center my-10">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item disabled">
            <Link
            className="button-pagination"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline size={25} />
              
            </Link>
          </li>
          {generatePaginationNumbers(currentPage, totalPages).map(
            (itemPagination,index) => (
              <li className="page-item" key={`${itemPagination}__${index}`}>
                <Link
                  className={clsx(
                    "page-link relative block py-1.5 px-3 outline-none transition-all duration-300 rounded text-bronce-800 hover:text-bronce-800 hover:bg-bronce-100 focus:shadow-none border-bronce-600 border mx-1",
                    {
                      "bg-bronce-600 text-white hover:text-bronce-500 hover:bg-bronce-800":
                        itemPagination === currentPage,
                    }
                  )}
                  href={createPageUrl(itemPagination)}
                >
                  {itemPagination} <span className="visually-hidden"></span>
                </Link>
              </li>
            )
          )}
          <li className="page-item">
            <Link
              className="button-pagination"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
