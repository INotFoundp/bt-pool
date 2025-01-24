import getUserFromCookie from "@/backend/tools/getUser";
import response, {error} from "@/backend/tools/respones";
import {Profit, User} from "@prisma/client";

export async function GET() {
    try {
        // @ts-ignore
        const user: User & { profit: Profit[] } = await getUserFromCookie({profit: true})

        return response(user?.profit)

    } catch (e) {
        return error("Error")
    }
}