import {NextRequest} from "next/server";
import getUserFromCookie from "@/backend/tools/getUser";
import {User, Worker} from "@prisma/client";
import response from "@/backend/tools/respones";

export  async function GET(req: NextRequest) {
    // @ts-ignore
    const user: User & { worker: Worker[] } = await getUserFromCookie({worker: true})



    return response(user?.worker)
}