"use client"

import React, {useState} from 'react';
// @ts-ignore
import {GoUnlock} from "react-icons/go";
// @ts-ignore
import {TfiEmail} from "react-icons/tfi";
import {FormType, RequestType} from "@/types/type";
import Link from "next/link";
import validation from "@/utils/validation";
import request from "@/utils/request";
import {useRouter} from "next/navigation";
import {User} from "@prisma/client";

const form: FormType[] = [
    {label: "Email", Icon: TfiEmail, placeholder: "Enter Your Email", type: "text", key: "email"},
    {label: "Password", Icon: GoUnlock, placeholder: "Password", type: "password", key: "password"},

]


const LoginPage = () => {
    const [data, setData] = useState({})

    const router = useRouter()
    return (
        <div className={" min-h-screen w-full flex justify-center items-center flex-col  gap-2"}>
            <div className="flex w-full items-center justify-center ">
                <div className="w-full max-w-md bg-white  p-8">
                    <h2 className="text-xl font-semibold  text-gray-700 mb-6 ">Sign in</h2>
                    <div>
                        {form.map((item) => {
                            let {Icon, className, description, extra, key, label, placeholder, type} = item;
                            return (
                                <div key={key} className="mb-4">

                                    <div className="relative">
                                        <Icon className="absolute font-light left-3 top-3 text-gray-400" size={20}/>
                                        <input
                                            onChange={({currentTarget}) => {
                                                setData(prev => ({
                                                    ...prev,
                                                    [key]: currentTarget?.value
                                                }))
                                            }}
                                            type={type}
                                            id={key}
                                            className="w-full placeholder:font-thin px-10 py-2 border rounded-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                            placeholder={placeholder}
                                        />
                                    </div>
                                </div>
                            )
                        })}


                        <button
                            onClick={() => {
                                const missed = validation(form, data)

                                if (missed) return alert("Please Enter " + missed)

                                request("/auth/login", "POST", data, (res : RequestType<User>) => {
                                    router.refresh()
                                    router.push("/pool/stats")
                                })

                            }}
                            className="w-full bg-[#05CDCD]  hover:bg-blue-600 text-white font-medium py-2 rounded-md"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Do Not Have ViaBTC Account?{' '}
                            <Link href="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
            <footer className="mt-8 text-center text-sm text-gray-400">
                Copyright © 2016 - 2025 ViaBTC
            </footer>
        </div>


    );
};

export default LoginPage;
