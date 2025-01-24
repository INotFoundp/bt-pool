import prisma from "@/backend/module/Prisma";
import getUserFromCookie from "@/backend/tools/getUser";
import response, {error} from "@/backend/tools/respones";
import {Bill, User} from "@prisma/client";

export async function GET() {

    // @ts-ignore
    const user : User & {bills : Bill[]} = await getUserFromCookie({bills : true})

    try {
        return response(user?.bills)
    }catch (e){
        return  error("Error")
    }


}