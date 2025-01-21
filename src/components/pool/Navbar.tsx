"use client"

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

export default function NavigationBar() {

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
        <div className={"w-full overflow-auto bg-[#282936] shadow-sm rounded px-10 py-4 flex items-center  p-3"}>
            <div className={"flex items-center pr-12 border-r-2  gap-2 "}>
                <img className={"w-8 h-8"} src={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"} alt={""}/>
                <span className={"text-white"}>BTC</span>
            </div>

            <div className={"flex z-40 items-center gap-8 pl-12"}>
                {Object.entries(links).map(([key, value]) => {
                    let {href, label} = value;
                    const isActive = href === activePath;


                    return (
                        <div className={`${isActive ? "text-[#05CDCD]" : "text-white "}`} key={key}>
                            <Link href={`/pool/${href}`}>
                                {label}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}