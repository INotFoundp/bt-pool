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
        <div className={"min-h-screen flex my-24 justify-center w-full items-center gap-2 bg-[#F5F6FA]"}>
            <div style={{boxShadow: "0 0 10px #99999923"}}
                 className={"flex bg-white h-full p-12 md:w-8/12 w-full rounded-md gap-2"}>
                <div className={"w-3/5 flex flex-col gap-12 justify-between"}>
                    <div className={"text-black flex flex-col gap-1 w-10/12 font-semibold text-xl"}>
                        <h3>An Integrated Global Cryptocurrency <br/> Mining Pool</h3>
                        <h3>
                            Comprehensive Cryptocurrency <br/> Mining Pool
                        </h3>
                        <p className={"text-xs mt-2 font-light text-black"}>Serving 1M users in 130+
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
                                                  className={"text-zinc-700 font-light text-xs"}>{text}</span>
                                        ))}
                                    </div>

                                </div>
                            )
                        })}

                        <span className={"text-sm text-zinc-700"}>Copyright © 2016 - 2025 BTC POOL</span>

                    </div>

                </div>
                <div className={"flex w-2/5 flex-col gap-8"}>
                    <div className={"text-black text-lg font-semibold"}>
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

                                if ((data?.password + "").length < 8) return alert("The length of the password must be more than 8 digits ")

                                if(data?.password !== data?.rePassword) return alert("The password and its repetition are not the same ")

                                delete data.rePassword

                                request("/auth/signup", "POST", data, (res ) => {
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