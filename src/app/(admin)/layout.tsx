import "@/app/(main)/globals.css"

import {ReactNode} from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'مدیریت',

}


const Layout = async ({children}: { children: ReactNode }) => {



    return (
        <html lang="en">
        <body className={`antialiased`}>


        <main className={"w-ful  bg-[#121212] "}>
            {children}
        </main>

        </body>
        </html>

    )
}

export default Layout