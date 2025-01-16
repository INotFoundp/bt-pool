"use client"

import React, {useEffect, useState} from "react";
import Logo from "@/components/theme/Logo";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {usePathname} from "next/navigation";
import prisma from "@/backend/module/Prisma";

export default  function Header() {

    const [showSideBard, setShowSideBard] = useState(false)
    const pathname = usePathname()
    //
    // const cookie = (await cookies())
    //
    // const token = cookie.get("token")?.value
    //
    // const user = jwt.verify(token + "", process.env.JWT_SECRET + "")
    //
    //
    // const firstUser = await prisma.user.findFirst({where: {id: user + ""}})
    //
    //

    const navLinks = [
        {label: "Pool", href: "pool"},
        {label: "Assets", href: "assets"},
        {label: "Blog", href: "blog"},
    ]


    useEffect(() => {
        setShowSideBard(false)
    }, [pathname]);

    return (
        <header className={"w-full fixed z-40 bg-opacity-100 md:bg-opacity-55 top-0 py-2 pb-3 bg-black "}>
            {showSideBard && (
                <div className={"w-full h-screen bg-black fixed z-40"}>
                    <div className={"px-3 flex flex-col items-end gap-5 justify-end"}>

                        <div className={"flex flex-row-reverse justify-between w-full"}>
                            <button onClick={() => {
                                setShowSideBard(false)
                            }} type="button"
                                    className="inline-flex items-center  w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden border focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-default" aria-expanded="false">
                                <AiOutlineClose size={22} className={"text-white"}/>
                            </button>

                            <Logo/>
                        </div>


                        <div className={"text-black z-50 w-full h-full"}>
                            {navLinks.map(item => {
                                let {href, label} = item;
                                return (
                                    <div key={href} className={"text-white border-b last:border-0 w-full p-3"}>
                                        <Link href={`/${href}`}>
                                            {href}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
            )}


            <div className={"container px-3 flex justify-between items-center gap-3 mx-auto"}>
                <Logo/>

                <div>
                    <nav className=" border-gray-200 ">
                        <div className=" flex flex-wrap items-center justify-between mx-auto ">
                            <button onClick={() => {
                                setShowSideBard(true)
                            }} type="button"
                                    className="flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden border "
                            >
                                <AiOutlineMenu size={22} className={"text-white"}/>
                            </button>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul title={"navbar"}
                                    className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 ">
                                    {navLinks.map(item => {
                                        let {href, label} = item;
                                        return (
                                            <Link
                                                key={href}
                                                href={`/${href}`}
                                                className="block py-2 hover:text-blue-600 px-3 text-white !bg-transparent"
                                            >
                                                {label}
                                            </Link>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>


        </header>
    )
}
