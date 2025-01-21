import {NextRequest, NextResponse} from "next/server";
import response, {error} from "@/backend/tools/respones";
import prisma from "@/backend/module/Prisma";
import * as jwt from "jsonwebtoken";
import * as bcrypt from 'bcrypt'
import {cookies} from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()


    try {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidEmail = (email: string): boolean => emailRegex.test(email);


        if (!isValidEmail(data?.email)) return error("Invalid email");

        const user = await prisma.user.findUnique({
            where: {
                email: data?.email
            }
        })

        if (user?.username === data?.username || user) return error("User already exists", 409);

        const prismaPayload = {
            ...data,
            username: data?.username,
            password: await bcrypt.hash(data?.password, 10),

        }
        const newUser = await prisma.user.create({
            data: prismaPayload
        })
        if (newUser) {
            const token = jwt.sign(newUser.id, process.env.JWT_SECRET + "", {algorithm: "HS256"});
            (await cookies()).set("token", token)

            return response({user: newUser})

        } else {
            return error("خطا در ایجاد حساب کاربری")
        }


    } catch (e) {
        return error(e + "")
    }

}