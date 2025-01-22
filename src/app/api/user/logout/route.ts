import {cookies} from "next/headers";
import response from "@/backend/tools/respones";

export async function DELETE() {
    const cookie = await cookies()

    cookie.delete("token")

    return response("sucess" , 203)
}