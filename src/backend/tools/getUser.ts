import prisma from "@/backend/module/Prisma";
import * as jwt from "jsonwebtoken"
import {cookies} from "next/headers";
import {Prisma} from "@prisma/client";

export default async function getUserFromCookie<T>(include?: Prisma.UserInclude
) {
    const cookie = await cookies()


    const token = cookie.get("token")?.value + ""

    if (!token) return null

    try {
        const id = jwt.verify(token, process.env.JWT_SECRET + "")
        return await prisma.user.findUnique({
            where: {
                id: id + ""
            },
            ...(Object.keys(include ?? {}).length  && ({include: include}))

        })
    } catch (e) {
        return null
    }

}

