"use client";
import { useUIStore } from "@/store";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import clsx from "clsx";
import { signOutButton } from "@/actions/auth/logout-action";
// import { signOutButton } from "@/app/actions/auth/logout-action";

interface Props {
  isAdmin: boolean;
  isAuthenticated: boolean;
}

const menuItems = [
  {
    // icon: <IoShirtOutline size={30} />,
    title: "Hombres",
    href: "/men",
  },
  {
    // icon: <IoTicketOutline size={30} />,
    title: "Mujeres",
    href: "/woman",
  },
  {
    // icon: <IoPeopleOutline size={30} />,
    title: "Niños",
    href: "/kids",
  },
];

const menuAdmin = [
  {
    // icon: <IoPeopleOutline size={30} />,
    title: "Administrar productos",
    href: "/products",
  },
  {
    // icon: <IoPeopleOutline size={30} />,
    title: "Crear Productos",
    href: "/product/new",
  },
];

export const SidebarItems = ({
  isAuthenticated = false,
  isAdmin = false,
}: Props) => {
  const onMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const onMenuClose = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {onMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 " />
      )}

      {/* Blur */}
      {onMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={onMenuClose}
        />
      )}

      {/* SideBar */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-bronce-400 text-bronce-50  z-20 shadow-2xl transform transition-all duration-300 overflow-y-auto ",
          {
            "translate-x-full": !onMenuOpen,
            // Clases condicionales con clsx
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={onMenuClose}
        />

        {/* Input */}
        {!isAuthenticated && (
          <Link
            onClick={onMenuClose}
            href="/auth/login"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl ">Ingresar</span>
          </Link>
        )}
        {isAuthenticated &&
          menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onMenuClose}
              className="flex items-center mt-10 p-2 hover:bg-bronce-800 rounded transition-all"
            >
              {/* {item.icon} */}
              <span className="ml-3 text-xl ">{item.title}</span>
            </Link>
          ))}
        {isAuthenticated && (
          <Link
            href="/auth/login"
            onClick={() => signOutButton()}
            className="flex items-center mt-10 p-2 hover:bg-bronce-800 rounded transition-all"
          >
            <IoLogOutOutline size={30} onClick={onMenuClose} />
            <span className="ml-3 text-xl ">Salir</span>
          </Link>
        )}
        {isAdmin && <div className="w-full h-px bg-gray-200 my-10" />}
        {isAdmin &&
          isAuthenticated &&
          menuAdmin.map((item) => (
              <Link
                href={item.href}
                key={`${item.title}-admin`}
                onClick={onMenuClose}
                className="flex items-center mt-10 p-2 hover:bg-bronce-800 rounded transition-all"
              >
                {/* {item.icon} */}
                <span className="ml-3 text-xl ">{item.title}</span>
              </Link>
          ))}
      </nav>
    </div>
  );
};
