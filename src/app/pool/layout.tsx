"use client"

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function PoolLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname()

    const activePath = pathname.split("/")[2]

    const links = {
        pool: {
            label: "Dashboard",
            href: "stats",
        },
        worker: {
            label: "Worker",
            href: "worker"
        },
        earning: {
            label: "Earnings",
            href: "earning",
        }
    }

    return (
        <div className={"min-h-screen flex flex-col gap-6 py-8 container md:w-11/12 lg:w-10/12 mx-auto bg-[#F5F6FA]"}>
            <div className={"w-full bg-white shadow-sm rounded px-10 py-4 flex items-center  p-3"}>
                <div className={"flex items-center pr-12 border-r-2  gap-2 "}>
                    <img className={"w-8 h-8"} src={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"} alt={""}/>
                    <span>BTC</span>
                </div>

                <div className={"flex items-center gap-8 pl-12"}>
                    {Object.entries(links).map(([key, value]) => {
                        let {href, label} = value;
                        const isActive = href === activePath;


                        return (
                            <div className={`${isActive ? "text-[#05CDCD]" : "text-zinc-700 "}`} key={key}>
                                <Link href={`/pool/${href}`}>
                                    {label}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}
