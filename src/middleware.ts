import {NextRequest} from "next/server";
import {error} from "@/backend/tools/respones";
import host from "@/server/host";

export async function middleware(req: NextRequest) {

    const paths = req.nextUrl.pathname.split("/")

    if (paths[2] === "user") {
        const token = req.cookies.get("token")?.value
        try {
            const user = await fetch(`${host}/api/check?token=${token}`).then(r => r.json())

            if (!user.ok) return error("Unauthorized", 401);
        } catch (e) {
            return error(e + "")
        }

    }
}

export const config = {
    matcher: '/api/:path*',
}
