import {NextRequest} from "next/server";
import response from "@/backend/tools/respones";
import getUserFromCookie from "@/backend/tools/getUser";

export async function GET(req: NextRequest) {

    const user = await getUserFromCookie()

    return response(user)
}