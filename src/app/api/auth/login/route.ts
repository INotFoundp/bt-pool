import {NextRequest} from "next/server";
import prisma from "@/backend/module/Prisma";
import respones, {error} from "@/backend/tools/respones";
import * as bcrypt from "bcrypt";
import {cookies} from "next/headers";
import * as jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
    const data = await req.json()
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data?.email
            }
        })
        if (!user) return error("User Not exists", 404);

        const password =user?.password()

        if (!bcrypt.compareSync(data?.password, password.password)) return error("Email Or Password is Incorrect", 401)

        const token = jwt.sign(user?.id, process.env.JWT_SECRET + "", {algorithm: "HS256"});


        (await cookies()).set("token", token);

        return respones({...user})
    } catch (e) {
        return error(e + "")
    }


}