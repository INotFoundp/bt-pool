"use client"

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

export default function NavBar() {

    const pathname = usePathname()

    const activePath = pathname.split("/")[2]

    const links = {
        self: {
            label: "My Assets",
            href: "summary",
        },
        earning: {
            label: "My Bills",
            href: "bill",
        }
    }

    return (
        <div className={"w-full overflow-auto bg-[#282936] shadow-sm rounded px-10 py-4 flex items-center  p-3"}>


            <div className={"flex z-40 items-center gap-8 "}>
                {Object.entries(links).map(([key, value]) => {
                    let {href, label} = value;
                    const isActive = href === activePath;


                    return (
                        <div className={`${isActive ? "text-[#05CDCD]" : "text-white "}`} key={key}>
                            <Link href={`/wallet/${href}`}>
                                {label}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
