"use client"

import React, {useEffect, useState} from "react";
import Logo from "@/components/theme/Logo";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {User} from "@prisma/client";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

// @ts-ignore
import {CiUser} from "react-icons/ci";
import useWindowSize from "@/hooks/useWindowsSize";


export default function Header({user}: { user: User | null }) {
    const router = useRouter()
    const [showSideBard, setShowSideBard] = useState(false)
    const pathname = usePathname()
    const [popOver, setPopOver] = useState(false)
    const navLinks = [
        {label: "Pool", href: "pool"},
        {label: "Assets", href: "assets"},
        {label: "Blog", href: "blog"},
    ]

    const [mobilePopOver, setMobilePopOver] = useState(false)

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
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };


        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, []);

    const {width} = useWindowSize()

    return (
        <header
            className={`w-full fixed z-50 ${scrollY > 0 ? " bg-[#03060D]" : "bg-transparent"} top-0 transition py-6  `}>
            {showSideBard && (
                <div className={"w-full flex flex-col justify-between  h-[100dvh] bg-[#03060D] fixed top-0 py-6 z-40"}>
                    <div className={"px-3 flex flex-col items-end gap-6 justify-end"}>

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

                    <div className={"w-full flex px-6 justify-between gap-2"}>

                        {!user?.id && (
                            <>
                                <Button size={width > 769 ? "lg" : "sm"}
                                        className={"bg-[#4A6CF7]  w-full rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                        onClick={async () => {
                                            router.push("/signup")
                                        }}
                                >
                                    Sign up
                                </Button>

                                <Button onClick={() => {
                                    router.push("/login")
                                }}
                                        size={"lg"}
                                        className={"bg-[#4A6CF7]/30 w-full  rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                        variant={"default"}>
                                    Sign in
                                </Button>
                            </>

                        )}


                    </div>

                </div>
            )}


            <div className={"w-full flex px-2 flex-row-reverse justify-between"}>


                <button onClick={() => {
                    setShowSideBard(true)
                }}
                        className="flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden border "
                >
                    <AiOutlineMenu size={22} className={"text-white"}/>
                </button>

                <div className={"w-fit"}>
                    <Logo/>
                </div>

                <div>
                    <Popover open={mobilePopOver}>
                        <PopoverTrigger>
                            <Button onClick={() => {
                                setMobilePopOver(prev => !prev)
                            }} size={"lg"}
                                    className={"bg-[#4A6CF7]/30 px-2 rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}

                                    variant={"default"}>
                                                <span className={"hidden md:block"}>
                                                       {user?.name}
                                                </span>

                                <CiUser size={30}/>
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

            </div>

            <div className={"md:flex container hidden  items-center mx-auto"}>
                <div
                    className={` px-3 flex w-full ${user?.id ? "flex-row-reverse" : "flex-row "} md:flex-row justify-between items-center gap-3`}>
                    <div className={"w-fit"}>
                        <Logo/>
                    </div>
                    <div className={"flex justify-between  md:justify-normal w-fit md:w-full items-center"}>

                        <nav className=" border-gray-200 ">
                            <div className=" flex flex-wrap items-center justify-between mx-auto ">
                                <button onClick={() => {
                                    setShowSideBard(true)
                                }}
                                        className="flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden border "
                                >
                                    <AiOutlineMenu size={22} className={"text-white"}/>
                                </button>
                                <div className="hidden w-full ml-16  md:block md:w-auto" id="navbar-default">
                                    <ul title={"navbar"}
                                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 ">
                                        {navLinks.map(item => {
                                            let {href, label} = item;
                                            return (
                                                <Link
                                                    key={href}
                                                    href={`/${href}`}
                                                    className="block py-2 text-base font-bold hover:text-white px-3 text-[#79808A] !bg-transparent"
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

                <div className={"text-white hidden md:flex gap-4"}>

                    <>
                        {user?.id ? (
                            <div className={"px-3"}>

                                <Popover open={popOver}>
                                    <PopoverTrigger>
                                        <Button onClick={() => {
                                            setPopOver(prev => !prev)
                                        }} size={"lg"}
                                                className={"bg-[#4A6CF7]/30 px-2 rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}

                                                variant={"default"}>
                                                <span className={"hidden md:block"}>
                                                       {user?.name}
                                                </span>

                                            <CiUser size={30}/>
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

                                <Button size={"lg"}
                                        className={"bg-[#4A6CF7] hidden md:block rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                        onClick={async () => {
                                            router.push("/signup")
                                        }}
                                >
                                    Sign up
                                </Button>

                                <Button onClick={() => {
                                    router.push("/login")
                                }}
                                        size={"lg"}
                                        className={"bg-[#4A6CF7]/30 hidden md:block rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                        variant={"default"}>
                                    Sign in
                                </Button>
                            </>
                        )}

                    </>


                </div>
            </div>


        </header>
    )
}
