import prisma from "@/backend/module/Prisma";
import * as jwt from "jsonwebtoken"
import {cookies} from "next/headers";

export default async function getUserFromCookie() {
    const cookie = await cookies()


    const id = jwt.verify(cookie.get("token")?.value + "", process.env.JWT_SECRET + "")

    return await prisma.user.findUnique({
        where: {
            id: id + ""
        }
    })
}

