import {NextRequest} from "next/server";
import getUserFromCookie from "@/backend/tools/getUser";
import response, {error} from "@/backend/tools/respones";
import prisma from "@/backend/module/Prisma";

export async function GET(req: NextRequest) {
    const user = await getUserFromCookie()
    if (!user) return error("Unauthorized");
    try {
        const update = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                role: "ADMIN"
            }
        })

        if(update) return response(update)

    } catch (e) {
        return error(e + "")

    }


}