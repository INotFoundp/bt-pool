"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useState} from "react";
import {Input} from "@/components/ui/input";

export default function Page() {
    const [activeSeg, setActiveSeg] = useState("minute")

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }, {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }, {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        }, {
            name: 'Page G',
            uv: null,
            pv: null,
            amt: 2100,
        }, {
            name: 'Page G',
            uv: null,
            pv: null,
            amt: 2100,
        },
    ];


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
        pps: {
            label: "PPS",
            value: "pps"
        },
        pplns: {
            label: "PPLNS",
            value: "pplns"
        },
        solo: {
            label: "SOLO",
            value: "solo"
        },
    }


    const profits = [
        {
            date: new Date().toLocaleDateString(), // Format: "MM/DD/YYYY"
            hashrate: "0 TH/s",
            total_profit: "0 BTC",
            unit_output: "0 BTC/TH/S",
            coin_price: "0 USD",
            total_profit_usd: "0 USD",
            pps_profit: "0 ",
            pplns_profit: "0 ",
            solo_profit: "0 ",
        }

    ]

    return (
        <div className={"flex flex-col gap-8"}>

            <div>
                <StatsCard className={"w-full h-fit  "} title={"Hashrate."}>


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
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}

                            >

                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area type="monotone" dataKey="uv" stroke="" fill="#2980b9"/>
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

                                    {profits.map((profit) => {
                                        let {
                                            coin_price,
                                            date,
                                            hashrate,
                                            pplns_profit,
                                            pps_profit,
                                            solo_profit,
                                            total_profit,
                                            total_profit_usd,
                                            unit_output
                                        } = profit;
                                        return (
                                            <tr className="z-40   text-white bg-[#282936]/50 last:border-0 border-b dark:border-gray-700">
                                                <th scope="row"
                                                    className="px-6 py-4   dark:text-white">
                                                    {date}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {hashrate}
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
                                                    {total_profit_usd}
                                                </td>
                                                <td className="px-6  text-[#05CDCD] py-4">
                                                    {pps_profit}
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
