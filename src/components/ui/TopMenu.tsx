"use client";
import { useUIStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const onOpenMenu = useUIStore((state) => state.openSideMenu);
  const [loaded, setloaded] = useState<boolean>(false);

  useEffect(() => {
    setloaded(true);
  }, []);

  return (
    <div className="flex px-5 justify-between items-center w-full bg-bronce-600 text-bronce-100 font-semibold h-16">
      {/* LOGO */}
      <div>
        <Link href="/">
          {" "}
          Jawel App
          {/* <span>Teslo</span>
            <span> | Shop</span> */}
        </Link>
      </div>
      {/* CENTER MENU */}
      <div className="hidden sm:block">
        <Link
          href="/men"
          className="m-2 p-2 rounded-md transition-all hover:text-bronce-300"
        >
          Hombres
        </Link>
        <Link
          href="/woman"
          className="m-2 p-2 rounded-md transition-all hover:text-bronce-300"
        >
          Mujeres
        </Link>
        <Link
          href="/kids"
          className="m-2 p-2 rounded-md transition-all hover:text-bronce-300"
        >
          Niños
        </Link>
      </div>

      {/* SEARCH,CART,MENU */}
      <div className="flex items-center ">
        <button
          className="m-2 p-2 rounded-md transition-all hover:scale-105"
          onClick={onOpenMenu}
        >
          <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
        </button>
      </div>
    </div>
  );
};
