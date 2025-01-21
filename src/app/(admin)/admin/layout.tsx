import {ReactNode} from "react";
import getUserFromCookie from "@/backend/tools/getUser";
import {redirect} from "next/navigation";
import Link from "next/link";

export default async function Layout({children}: { children: ReactNode }) {


    const user = await getUserFromCookie()



    if (!user) return redirect("/admin/auth/login")

    if (user?.role !== "ADMIN") return redirect("/?message=Access_Denied")


    return (
        <div className={"bg-white flex "}>

            <aside id="default-sidebar"
                   className=" top-0 border-r left-0 z-40 w-64  min-h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-[calc(100%-10px)] w-full relative px-3 py-4 overflow-y-auto bg-gray-900 text-white dark:bg-gray-800">
                    <ul className="space-y-2 sticky top-0 left-0 font-medium">
                        <li>
                            <Link href={"/admin/worker"}
                                  className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 group">
                                <span className="flex-1 ms-3 whitespace-nowrap">Worker</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className={"container p-12 mx-auto"}>
                {children}
            </div>

        </div>
    )
}
