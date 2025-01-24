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
        <div
            className={" min-h-screen  overflow-hidden relative w-full flex justify-center items-center flex-col  gap-2"}>
            <svg className={"absolute -right-48 -top-48 "} width="1356" height="860" viewBox="0 0 1356 860"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" filter="url(#filter0_f_201_2181)">
                    <rect x="450.088" y="-126.709" width="351.515" height="944.108"
                          transform="rotate(-34.6784 450.088 -126.709)" fill="url(#paint0_linear_201_2181)"></rect>
                </g>
                <defs>
                    <filter id="filter0_f_201_2181" x="0.0878906" y="-776.711" width="1726.24" height="1876.4"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_2181"></feGaussianBlur>
                    </filter>
                    <linearGradient id="paint0_linear_201_2181" x1="417.412" y1="59.4717" x2="966.334" y2="603.857"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ABBCFF"></stop>
                        <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <svg className={"absolute -bottom-20 -left-48"} width="1469" height="498" viewBox="0 0 1469 498"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_201_2182)">
                    <rect y="450" width="1019" height="261" fill="url(#paint0_linear_201_2182)"></rect>
                </g>
                <defs>
                    <filter id="filter0_f_201_2182" x="-450" y="0" width="1919" height="1161"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_2182"></feGaussianBlur>
                    </filter>
                    <linearGradient id="paint0_linear_201_2182" x1="-94.7239" y1="501.47" x2="-65.8058" y2="802.2"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ABBCFF"></stop>
                        <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex w-full z-40 items-center justify-center ">
                <div className="w-full max-w-md  bg-[#282936] rounded-md  p-8">
                    <h2 className="text-xl font-semibold  text-white mb-6 ">Sign in</h2>
                    <div className={"z-40"}>
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
                                            className="w-full placeholder:font-thin text-white px-10 bg-[#121212] py-2 border border-[#111] rounded-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"

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

                                request("/auth/login", "POST", data, (res: RequestType<User>) => {

                                    if (res?.data?.role === "ADMIN") {
                                        router.push("/admin")
                                        return;
                                    }

                                    router.refresh()
                                    router.push("/pool/stats")
                                })

                            }}
                            className="w-full bg-[#05CDCD] z-40 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Do Not Have BT-Pool Account?{' '}
                            <Link href="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
            <footer className="mt-8 text-center text-sm text-[#79808A]">
                Copyright © 2016 - 2025 BTPool
            </footer>
        </div>


    );
};

export default LoginPage;
