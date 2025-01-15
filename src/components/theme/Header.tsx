import React from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import prisma from "@/backend/module/Prisma";
import {cookies} from "next/headers";
import * as jwt from "jsonwebtoken"

export default async function Header() {



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

    return (
        <header className={"w-full fixed z-40 bg-opacity-55 top-0 p-2 bg-black "}>


            <div className={"container flex items-center gap-3 mx-auto"}>
                <Logo/>

                <div>
                    <nav className=" border-gray-200 ">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                            <button data-collapse-toggle="navbar-default" type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 ">
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
