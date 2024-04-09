'use client';

import { useUiStore } from "@/store/inex";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

export const Sidebar = () => {

    const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUiStore(state => state.closeSideMenu);

    return (
        <>
            {/* bg dark */}
            {
                isSideMenuOpen &&
                <div className="fixed z-10 top-0 left-0 w-screen h-screen bg-black opacity-30"></div>

            }



            {/* bg blur */}
            {
                isSideMenuOpen &&
                <div
                    className="fixed z-10 top-0 left-0 w-screen h-screen backdrop-filter backdrop-blur-sm"
                    onClick={closeSideMenu}
                ></div>
            }


            {/* sidebar */}
            <nav
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                        {
                            "translate-x-full": !isSideMenuOpen
                        }
                    )
                }>

                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => closeSideMenu()}
                />

                {/* input */}
                <div className="relative mt-14">
                    <IoSearchOutline size={20} className="absolute top-2 left-2" />

                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />

                </div>

                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoPersonOutline size={30} />
                    <span className="ml-3 text-xl" >Perfil</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl" >Ordenes</span>
                </Link>

                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoLogInOutline size={30} />
                    <span className="ml-3 text-xl" >Ingresar</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoLogOutOutline size={30} />
                    <span className="ml-3 text-xl" >Salir</span>
                </Link>

                {/* Line separator */}
                <div className="w-full h-px bg-gray-200 my-10"></div>

                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoShirtOutline size={30} />
                    <span className="ml-3 text-xl" >Productos</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl" >Ordenes</span>
                </Link>
                <Link
                    href='/'
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all text-gray-800 "
                >
                    <IoPeopleOutline size={30} />
                    <span className="ml-3 text-xl" >Usuarios</span>
                </Link>
            </nav>
        </>
    )
}
