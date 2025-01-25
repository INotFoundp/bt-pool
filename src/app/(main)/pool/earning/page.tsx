"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";
import useGetData from "@/hooks/useGetData";
import {Profit, User} from "@prisma/client";
import Loader from "@/components/theme/Loader";

export default function Page() {
    const [activeSeg, setActiveSeg] = useState("all")

    const [chartData, setChartData] = useState([{name: "to day", Hashrate: 0}])
    const {data: user, loading} = useGetData<User>("/user/me")

    const {data: profits, loadingProfit} = useGetData<Profit[]>("/user/pool/earnings")

    const segmentTableButtons = {
        all: {
            label: "All",
            value: "all"
        },
        active: {
            label: "Active",
            value: "active"
        },
        offline: {
            label: "Offline",
            value: "offline"
        },
        inActive: {
            label: "In Active",
            value: "inactive"
        },
    }

    const segmentButtons = {
        all: {
            label: "Summary",
            value: "all"
        },

    }

    useEffect(() => {
        if (!loading) {
            if (user?.email === "reza.naderkhani42@gmail.com") {
                fetch("/data/chart.json").then(r => r.json()).then((data: any[]) => {


                    const datas = data?.map(item => {
                        const newHashrate = Number(item.Hashrate?.slice?.(0, -1)) ?? 0
                        console.log(newHashrate)

                        return {...item, Hashrate: newHashrate}
                    })

                    console.log(datas)

                    setChartData(datas as any)
                })
            }
        }


    }, [user, loading])


    if (loading || loadingProfit) return <Loader/>

    return (
        <div className={"flex flex-col gap-8"}>

            <div>
                <StatsCard topButtonTitle={'Export Data'} className={"w-full h-fit "} title={"Hashrate"}>


                    <div className={"mb-12"}>
                        <div className={"flex gap-4"}>
                            {Object.entries(segmentButtons).map(([key, val]) => {
                                let {label, value} = val;
                                const isActive = value == activeSeg
                                return (
                                    <span onClick={() => {
                                        setActiveSeg(value)
                                    }}
                                          className={` cursor-pointer transition py-2 ${isActive ? "border-[#05CDCD] text-[#05CDCD]  border-b-2" : ""} `}>
                                       {label}
                                    </span>
                                )
                            })}

                        </div>
                    </div>
                    <div className={" md:h-[250px] h-fit"}>
                        <ResponsiveContainer key={chartData?.length} width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={chartData ?? []}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}

                            >
                                <XAxis dataKey="Date"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area type="monotone" dataKey="Hashrate" stroke="" fill="#2980b9"/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </StatsCard>

            </div>
            <div>
                <StatsCard className={" w-full h-fit"} title={"Profit Detail"}>
                    <div>

                        <div>

                            <div className="relative overflow-x-auto  sm:rounded-lg">
                                <table
                                    className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-500 uppercase w-full dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 text-xs  py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            Hashrate
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            Total Profit
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            Unit Output(TH/S)
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            Coin Price(USD)
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            Total Profit(USD)
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            PPS Profit
                                        </th>
                                        <th scope="col" className="px-6 text-xs  py-3">
                                            PPLNS Profit
                                        </th>
                                        <th scope="col" className="px-6 text-xs py-3">
                                            SOLO Profit
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>

                                    {profits?.map?.((profit) => {
                                        let {
                                            coin_price,
                                            total_profit,
                                            usd_total_profit, solo_profit, psp_profit,
                                            hashrat,
                                            id,
                                            unit_output, created_at,
                                            pplns_profit
                                        } = profit;
                                        return (
                                            <tr className="z-40   text-white bg-[#282936]/50 last:border-0 border-b dark:border-gray-700">
                                                <th scope="row"
                                                    className="px-6 py-4   dark:text-white">
                                                    {new Date(created_at).toLocaleDateString()}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {hashrat}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {total_profit}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {unit_output}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {coin_price}
                                                </td>
                                                <td className="px-6  py-4">
                                                    {usd_total_profit}
                                                </td>
                                                <td className="px-6  text-[#05CDCD] py-4">
                                                    {psp_profit}
                                                </td>
                                                <td className="px-6 text-[#05CDCD] py-4">
                                                    {pplns_profit}
                                                </td>
                                                <td className="px-6 text-[#05CDCD]  py-4">
                                                    {solo_profit}
                                                </td>
                                            </tr>
                                        )

                                    })}


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </StatsCard>
            </div>
        </div>
    )
}
