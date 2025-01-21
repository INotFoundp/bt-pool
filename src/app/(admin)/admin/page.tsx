import {$Enums} from "@prisma/client";
import {redirect} from "next/navigation";




export default async function Page() {


    return (
        redirect("/admin/worker")
    )
}
