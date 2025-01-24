"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {FormType} from "@/types/type";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import toast from "react-hot-toast";
import useGetData from "@/hooks/useGetData";
import {User} from "@prisma/client";
import Loader from "@/components/theme/Loader";

export default function Page() {
    const {data: user, loading} = useGetData<User>("/user/me")
    const form: FormType[] = [
        {label: "Withdraw Address", key: "withdraw_address", type: "text"},
        {label: "Aount", key: "amount", type: "number", extra: {amount: 0.00002}},

    ]


    const [data, setData] = useState<Partial<{
        withdraw_address: string
        amount: number
    }>>({})

    const [value, setValue] = useState(0)

    if (loading) return <Loader/>

    return (
        <div>
            <StatsCard className={"w-full h-fit"} title={"withdraw"}>
                <div className={"w-full flex gap-6"}>
                    <div className={"w-full px-6 flex flex-col gap-6  py-2"}>
                        {form.map((item) => {
                            let {Icon, className, description, extra, key, label, placeholder, type} = item;
                            return (
                                <div key={key} className={"flex z-40 flex-col gap-4"}>
                                    <div className={"flex justify-between"}>
                                        <span>{label}</span>
                                        {"amount" in (extra ?? {}) && (
                                            <span
                                                className={"text-gray-500"}> Available {user?.btc_balace} ~ ${(Number(user?.btc_balace) * 105518).toLocaleString()} USDT</span>)}
                                    </div>
                                    <Input onChange={({currentTarget}) => {
                                        setData(prev => ({
                                            ...prev,
                                            [key]: type === "number" ? +currentTarget.value : currentTarget?.value
                                        }))

                                    }} className={"z-40 h-12 text-lg !px-3 !py-4"} placeholder={label} key={key}
                                           type={type} title={label}/>
                                </div>
                            )
                        })}

                        <div className={"w-full flex justify-between"}>
                            <span>Deduction</span>
                            <span className={"font-bold"}>
                                {!!value ? (value).toLocaleString() : "--"} USDT
                            </span>
                        </div>

                        <div className={"my-6 z-40"}>
                            <Button
                                onClick={() => {

                                    if (!data?.withdraw_address) return toast.error("Please Enter Withdraw Address")
                                    if (!data?.amount) return toast.error("Please Enter Amount")
                                    // if ((Number(user?.btc_balace) * 105518) < data?.amount) return toast.error("No Enough Balance ")

                                    setTimeout(() => {
                                        toast.error("This item is not available in your country. Please call support.")
                                    }, 1000)
                                }}
                                size={"lg"}
                                className={"bg-[#4A6CF7]/30 w-full py-8 rounded-lg text-lg z-40 active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                variant={"default"}>
                                Withdraw

                            </Button>
                        </div>

                    </div>
                    <div className={"w-full flex flex-col gap-6 px-6 py-6"}>
                        <div>
                            <h5>Attention</h5>
                        </div>
                        <div>
                            <ol className={"list-decimal flex flex-col gap-6"} type={"1"}>

                                <li>ZERO fee and confirmation for Inter-user Transfer, with no withdrawal limit.</li>
                                <li>Normal Transfer requires 3 USDT as miner fees.Withdrawal amount should be greater
                                    than 1 USDT for Normal transfer.
                                </li>
                                <li>Manual auditing is required for withdrawals over 100000 USDT in 24 hours. Auditing
                                    will be completed within 24 hour.
                                </li>
                                <li>Only network Ethereum(ERC20) is supported for normal withdrawal, please note the
                                    correct address.
                                </li>
                                <li>Withdrawing via smart contract is NOT supported.</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </StatsCard>
        </div>
    )
}
