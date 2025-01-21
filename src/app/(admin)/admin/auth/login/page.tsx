import React from "react";
import {FormType} from "@/types/type";
import prisma from "@/backend/module/Prisma";
import {error} from "@/backend/tools/respones";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import getUserFromCookie from "@/backend/tools/getUser";

export default async function Page() {

    const form: FormType[] = [
        {label: "Email", placeholder: "Enter Your Email", type: "text", key: "email"},
        {label: "Password", placeholder: "Password", type: "password", key: "password"},
    ]


    async function submitHandler(formData: FormData) {
        "use server"

        const values = Object.fromEntries(formData.entries()) as { email: string, password: string }

        try {
            const user = await prisma.user.findUnique({
                where: {
                    email: values?.email
                }
            })

            if (!user) return;

            const password = user?.password()

            if (!bcrypt.compareSync(values?.password, password.password)) return error("Email Or Password is Incorrect", 401)

            const token = jwt.sign(user?.id, process.env.JWT_SECRET + "", {algorithm: "HS256"});


            console.log(token);

            (await cookies()).set("token", token);

            redirect("/admin")

        } catch (e) {

        }
    }

    const user = await getUserFromCookie()

    if(user) return redirect("/admin")

    return (
        <div
            className={" min-h-screen  overflow-hidden relative w-full flex justify-center items-center flex-col  gap-2"}>

            <div className="flex w-full z-40 items-center justify-center ">
                <div className="w-full max-w-md  bg-[#282936] rounded-md  p-8">
                    <h2 className="text-xl font-semibold  text-white mb-6 ">Sign in</h2>
                    <form action={submitHandler as any} className={"z-40"}>
                        {form.map((item) => {
                            let {Icon, className, description, extra, key, label, placeholder, type} = item;
                            return (
                                <div key={key} className="mb-4">

                                    <div className="relative">

                                        <input
                                            name={key}
                                            type={type}
                                            id={key}
                                            className="w-full placeholder:font-thin text-white px-10 bg-[#121212] py-2 border border-[#111] rounded-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"

                                            placeholder={placeholder}
                                        />
                                    </div>
                                </div>
                            )
                        })}


                        <button

                            className="w-full bg-[#05CDCD] z-40 hover:bg-blue-600 text-white font-medium py-2 rounded-md">
                            Submit
                        </button>
                    </form>


                </div>
            </div>

        </div>
    )
}
