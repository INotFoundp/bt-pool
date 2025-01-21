"use client"

// @ts-ignore
import {FiCrosshair} from "react-icons/fi";
// @ts-ignore
import {FaRegGem} from "react-icons/fa";
// @ts-ignore
import {GoUnlock} from "react-icons/go";
// @ts-ignore
import {TfiEmail} from "react-icons/tfi";
import {usePathname, useRouter} from "next/navigation";
import validation from "@/utils/validation";
import request from "@/utils/request";
import React, {useState} from "react";
import {FormType} from "@/types/type";

type Data = {
    username: string
    name: string
    password: string
    email: string
    rePassword: string
}

export default function Layout() {
    const pathname = usePathname()
    const [data, setData] = useState<Partial<Data>>({
        password: ""
    })

    const activePath = pathname.split("/")[2]
    const router = useRouter()


    const items = {
        efficient: {
            Icon: FiCrosshair,
            label: "Efficient Mining",
            list: [
                "16 pools like BTC, BCH, KAS, LTC are supported",
                "Real-time hashrate monitor/ hourly earnings distribution/ transparent data"
            ]
        },
        characteristics: {
            Icon: FaRegGem,
            label: "Efficient Mining",
            list: [
                "No tx fees required for auto-withdrawals",
                "Hourly auto-conversion for coins",
                "Hedging Service & Crypto Loans"
            ]
        }
    }

    const form: FormType[] = [
        {label: "Username", Icon: TfiEmail, placeholder: "Username", type: "text", key: "username"},
        {label: "Name", Icon: TfiEmail, placeholder: "Name", type: "text", key: "name"},
        {label: "Email", Icon: TfiEmail, placeholder: "Enter Your Email", type: "text", key: "email"},
        {label: "Password", Icon: GoUnlock, placeholder: "Password", type: "password", key: "password"},
        {label: "Re-Password", Icon: GoUnlock, placeholder: "Re-Password", type: "password", key: "rePassword"},

    ]


    return (
        <div className={"md:min-h-screen h-fit relative flex py-24 overflow-hidden justify-center w-full items-center gap-2 bg-[#121212]"}>

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

            <div style={{boxShadow: "0 0 10px #99999923"}}
                 className={"flex bg-[#282936] flex-col-reverse md:flex-row h-full p-6 md:p-12 md:w-8/12 w-full rounded-md gap-12 md:gap-2"}>
                <div className={"md:w-3/5 w-full flex text-white flex-col gap-12 justify-between"}>
                    <div className={"text-white flex flex-col gap-1 w-full  md:w-10/12 font-semibold text-xl"}>
                        <h3>An Integrated Global Cryptocurrency <br/> Mining Pool</h3>
                        <h3>
                            Comprehensive Cryptocurrency <br/> Mining Pool
                        </h3>
                        <p className={"text-xs mt-2 font-light text-white"}>Serving 1M users in 130+
                            countries/regions</p>
                    </div>

                    <div className={"flex flex-col gap-10"}>
                        {Object.entries(items).map(([key, value]) => {

                            let {label, list, Icon} = value;

                            return (
                                <div key={key} className={"flex flex-col gap-4"}>
                                    <div>
                                        <h5 className={"flex text-[#05CDCD] items-center gap-1"}>
                                            <Icon size={12}/>
                                            <span className={"text-xs"}>{label}</span>
                                        </h5>
                                    </div>

                                    <div className={"flex flex-col"}>
                                        {list.map(text => (
                                            <span key={text}
                                                  className={"text-[#79808A] font-light text-xs"}>{text}</span>
                                        ))}
                                    </div>

                                </div>
                            )
                        })}

                        <span className={"text-sm text-[#79808A]"}>Copyright © 2016 - 2025 BTC POOL</span>

                    </div>

                </div>
                <div className={"flex z-40 w-full md:w-2/5 flex-col gap-8"}>
                    <div className={"text-white text-lg font-bold"}>
                        <h5>Sign up</h5>
                    </div>
                    <div className={"w-full h-full flex flex-col justify-between"}>

                        {form.map((item) => {
                            let {Icon, className, description, extra, key, label, placeholder, type} = item;
                            return (
                                <div key={key} className="mb-4 w-full">

                                    <div className="relative w-full">
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

                                if ((data?.password + "").length < 8) return alert("The length of the password must be more than 8 digits ")

                                if (data?.password !== data?.rePassword) return alert("The password and its repetition are not the same ")

                                delete data.rePassword

                                request("/auth/signup", "POST", data, (res) => {
                                    router.push("/pool/stats")
                                })

                            }}
                            className="w-full bg-[#05CDCD] hover:bg-blue-600 text-white font-medium py-2 rounded-md"
                        >
                            Sign in
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}