"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";


export default function Page() {
    const [mainGroup, setMainGroup] = useState("all")
    const [activeSeg, setActiveSeg] = useState("all")

    const miners = {
        all: {
            label: "All Miners",
            value: "all",
        },
        default: {
            label: "Default Group",
            value: "default"
        }
    }

    const segmentButtons = {
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

    const invoices = [
        {
            worker_number: "001",
            min: "0",
            hour: "0",
            reject_rate: "0%",
            last_submit: new Date().toLocaleDateString(),
            status: "ACTIVE",
        },

    ]


    return (
        <div>
            <div className={"w-full flex flex-col md:flex-row  gap-4"}>
                <StatsCard childrenClassName={"px-0"} className={"w-full md:w-3/12"} title={"My Group"}>
                    <div className={"w-full flex flex-col"}>
                        {Object.entries(miners).map(([key, val]) => {
                            let {label, value} = val;
                            const isActive = value === mainGroup
                            return (
                                <div onClick={() => {
                                    setMainGroup(value)
                                }}
                                     className={`flex ${isActive && "bg-blue-500/5 border-l-2 border-blue-400 "} !py-4 cursor-pointer px-3 justify-between `}>
                                    <span className={"text-sm text-gray-800 font-semibold"}>
                                        {label}
                                    </span>
                                    <span className={"text-sm text-gray-400"}>
                                       0/2
                                    </span>
                                </div>
                            )
                        })}

                    </div>
                </StatsCard>
                <StatsCard className={"md:w-9/12 w-full h-fit"} title={"Worker List"}>
                    <div>
                        <div className={"mb-12 flex flex-col-reverse gap-4 md:flex-row justify-between"}>
                            <div className={"flex "}>
                                {Object.entries(segmentButtons).map(([key, val]) => {
                                    let {label, value} = val;
                                    const isActive = value == activeSeg
                                    return (
                                        <span onClick={() => {
                                            setActiveSeg(value)
                                        }}
                                              className={` px-5 cursor-pointer text-sm   transition py-2 ${isActive ? "border-[#05CDCD] text-[#05CDCD] bg-white  rounded-sm rounded-b-none  border-b-2" : "text-zinc-700 bg-[#F5F6FA]"} `}>
                                       {label}
                                    </span>
                                    )
                                })}

                            </div>
                            <div>
                                <Input placeholder={"Enter Miner Name"} type={"text"}/>
                            </div>
                        </div>
                        <div>

                            <div className="relative overflow-x-auto  sm:rounded-lg">
                                <table
                                    className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase w-full dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            Worker
                                        </th>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            10-Min Avg
                                        </th>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            24-Hour Avg
                                        </th>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            RejectRate
                                        </th>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            Last Submit
                                        </th>
                                        <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                            Status
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>

                                    {invoices.map((invoice) => {
                                        let {hour, last_submit, min, reject_rate, status, worker_number} = invoice;
                                        return (
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 last:border-0 border-b dark:border-gray-700">
                                                <th scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {worker_number}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {min}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {hour}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {reject_rate}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {last_submit}
                                                </td>
                                                <td className="px-6 text-green-500 py-4">
                                                    {status}
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
