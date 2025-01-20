
import React from "react";
import NavigationBar from "@/components/pool/Navbar";
import getUserFromCookie from "@/backend/tools/getUser";
import {redirect} from "next/navigation";

export default async function PoolLayout({children}: { children: React.ReactNode }) {

    const user = await getUserFromCookie()

    if(!user?.id) return redirect("/")

    return (
        <div
            className={"min-h-screen px-2 flex flex-col gap-6 py-8 container md:w-11/12 lg:w-10/12 mx-auto bg-[#F5F6FA]"}>
            <NavigationBar/>
            <div>
                {children}
            </div>
        </div>
    )
}
