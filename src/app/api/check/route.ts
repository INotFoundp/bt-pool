import {NextRequest} from "next/server";
import response, {error} from "@/backend/tools/respones";
import * as jwt from "jsonwebtoken";
import prisma from "@/backend/module/Prisma";
import {ExecException} from "node:child_process";


export async function GET(req: NextRequest) {
    const token = req.nextUrl.searchParams.get('token');
    if (token === undefined || !token) return error("Unauthorized", 401);



    try {

        const id = jwt.verify(token, process.env.JWT_SECRET + "")

        if(!id) return error("Unauthorized", 401);

        const user = await prisma.user.findUnique({
            where: {
                id: id + ""
            }
        })

        return response(user)
    } catch (e : any) {
        return error(e + "")
    }



}