"use client"

import React, {useEffect, useState} from "react";
import Logo from "@/components/theme/Logo";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import useGetData from "@/hooks/useGetData";
import {User} from "@prisma/client";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

// @ts-ignore
import {CiUser} from "react-icons/ci";


export default  function Header() {
    const router = useRouter()
    const [showSideBard, setShowSideBard] = useState(false)
    const pathname = usePathname()
    const [popOver, setPopOver] = useState(false)
    const navLinks = [
        {label: "Pool", href: "pool"},
        {label: "Assets", href: "assets"},
        {label: "Blog", href: "blog"},
    ]

    const {data, loading, refetch} = useGetData<User>("/user/me")


    useEffect(() => {
        setShowSideBard(false)
    }, [pathname]);

    const accountLinks = {
        account: {
            label: "Account",
            href: "stats"
        },
        worker: {
            label: "Worker",
            href: "worker"
        },
        earning: {
            label: "Earning",
            href: "earning"
        },
    }


    return (
        <header className={"w-full fixed z-40 bg-opacity-100 top-0 py-2 pb-3 bg-[#03060D] "}>
            {showSideBard && (
                <div className={"w-full  h-screen bg-[#03060D] fixed z-40"}>
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

            <div className={"flex container  items-center mx-auto"}>
                <div
                    className={" px-3 flex w-full flex-row-reverse md:flex-row justify-between items-center gap-3"}>
                    <div className={"w-fit"}>
                        <Logo/>
                    </div>
                    <div className={"flex justify-between  md:justify-normal w-fit md:w-full items-center"}>

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

                <div className={"text-white flex gap-4"}>
                    {loading ? (
                        <Button>
                            <div className={"border-r-2 rounded-full w-3 h-3 animate-spin"}>
                            </div>
                            Loading
                        </Button>
                    ) : (
                        <>
                            {data?.id ? (
                                <div className={"px-3"}>

                                    <Popover open={popOver}>
                                        <PopoverTrigger>
                                            <Button onClick={() => {
                                                setPopOver(prev => !prev)
                                            }} size={"sm"}
                                                    className={" border bg-transparent bg-opacity-50 border-white"}
                                                    variant={"default"}>
                                                <CiUser/>
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            className={"w-[200px] rounded-none shadow-none py-0 px-0 text-sm"}>
                                            <ul className={"flex flex-col "}>
                                                {Object.entries(accountLinks).map(([key, value]) => {
                                                    return (
                                                        <Link onClick={() => {
                                                            setPopOver(false)
                                                        }} key={key} href={`/pool/${value.href}`}
                                                              className={"text-sm hover:bg-gray-200 font-light px-6 last:border-0 border-b    py-3 px"}>
                                                            {value.label}
                                                        </Link>
                                                    )
                                                })}
                                            </ul>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            ) : (
                                <>
                                    <Button onClick={async () => {
                                        router.push("/signup")
                                    }} size={"sm"} className={" border bg-transparent bg-opacity-50 border-white"}
                                            variant={"default"}>
                                        Sign up
                                    </Button>
                                    <Button onClick={() => {
                                        router.push("/login")
                                    }} size={"sm"} className={"  bg-opacity-50 bg-transparent border-white"}
                                            variant={"default"}>
                                        Sign in
                                    </Button>
                                </>
                            )}

                        </>
                    )}

                </div>
            </div>


        </header>
    )
}
