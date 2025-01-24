"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {Input} from "@/components/ui/input";
import React, {useEffect, useState} from "react";
import useGetData from "@/hooks/useGetData";
import {Worker} from "@prisma/client";
import Loader from "@/components/theme/Loader";
// @ts-ignore
import { FaSearch } from "react-icons/fa";
import {Button} from "@/components/ui/button";


export default function Page() {
    const [workers, setWorkers] = useState<Worker[]>([])
    const {data, loading} = useGetData<Worker[]>("/user/pool/worker")

    const [mainGroup, setMainGroup] = useState("all")
    const [activeSeg, setActiveSeg] = useState("all")
    const [searched, setSearched] = useState("")

    function filterAndGetLength(data: Worker[], key: Worker["status"]) {
        return data?.filter?.(item => item.status === key).length ?? 0
    }

    const miners = {
        all: {
            label: "All Miners ",
            value: "all",
            count: `${filterAndGetLength(data, "ACTIVE")}/${data?.length}`
        },

    }


    const segmentButtons = {
        all: {
            label: "All",
            value: "all",
            count: data?.length
        },
        active: {
            label: "Active",
            value: "active",
            count: filterAndGetLength(data, "ACTIVE")
        },
        offline: {
            label: "Offline",
            value: "offline",
            count: filterAndGetLength(data, "OFFLINE")
        },
        inActive: {
            label: "In Active",
            value: "inactive",
            count: filterAndGetLength(data, "INACTIVE")
        },
    }

    const stats_color = {
        OFFLINE: "red",
        INACTIVE: "orange",
        ACTIVE: "green"
    }

    useEffect(() => {
        if (!loading && data?.length) {
            setWorkers(data)
        }
    }, [data]);

    useEffect(() => {
        if (activeSeg === "all") {
            setWorkers(data ?? [])
            return;
        }

        const filtered = data?.filter?.(i => i.status.toLocaleLowerCase() === activeSeg)
        setWorkers(filtered)
    }, [activeSeg, data]);


    if (loading) return <Loader/>

    return (
        <div className={"z-40 relative"}>
            <div className={"w-full z-40  flex flex-col md:flex-row  gap-4"}>
                <StatsCard childrenClassName={"px-0"} className={"w-full overflow-auto  top-28 left-0  md:w-3/12"}
                           title={"My Group"}>
                    <div className={"w-full z-40 flex flex-col"}>
                        {Object.entries(miners).map(([key, val]) => {
                            let {label, value, count} = val;
                            const isActive = value === mainGroup
                            return (
                                <div onClick={() => {
                                    setMainGroup(value)
                                }}
                                     className={`flex ${isActive && "bg-blue-500/5 border-l-2 border-blue-400 "} !py-4 cursor-pointer px-3 z-40 justify-between `}>
                                    <span className={"text-sm text-white font-semibold"}>
                                        {label}
                                    </span>
                                    <span className={"text-sm text-gray-400"}>
                                      {count}
                                    </span>
                                </div>
                            )
                        })}

                    </div>
                </StatsCard>
                <StatsCard className={"md:w-9/12 w-full h-fit"} title={"Worker List"}>
                    <div>
                        <div className={"mb-12 flex flex-col-reverse overflow-auto gap-4 md:flex-row justify-between"}>
                            <div className={"flex z-40 "}>
                                {Object.entries(segmentButtons).map(([key, val]) => {
                                    let {label, value, count} = val;
                                    const isActive = value == activeSeg
                                    return (
                                        <span onClick={() => {
                                            setActiveSeg(value)
                                        }}
                                              className={` px-5 flex gap-2 cursor-pointer text-sm   transition py-2 ${isActive ? "border-[#05CDCD] text-[#121212] bg-white  rounded-sm rounded-b-none  border-b-2" : "text-gray-500 bg-[#282936]"} `}>
                                       {label}
                                            <span className={"bg-[#999] rounded-md text-white px-2 "}>
                                                {count}
                                            </span>
                                    </span>
                                    )
                                })}

                            </div>

                        </div>

                        {!!data?.length ? (
                            <div>

                                <div className="relative overflow-x-auto  sm:rounded-lg">
                                    <table
                                        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead
                                            className="text-xs text-gray-500 uppercase w-full dark:bg-gray-700 dark:text-gray-400">
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
                                                First Submit
                                            </th>
                                            <th scope="col" className="px-6 text-xs w-1/6 py-3">
                                                Status
                                            </th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        {workers?.map?.((worker, index) => {
                                            const {
                                                status,
                                                last_submit,
                                                id,
                                                hour_profit,
                                                minut_profit,
                                                nurmic_id,
                                                rejected_rate,
                                                first_submit
                                            } = worker

                                            console.log(last_submit)
                                            return (
                                                <tr className=" z-40   text-white bg-[#282936]/50 last:border-0 border-b dark:border-gray-700">
                                                    <th scope="row"
                                                        className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                        {index >= 9 ? "0" : "00"}{index + 1}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {minut_profit}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {hour_profit}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {rejected_rate}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {new Date(last_submit).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {new Date(first_submit).toLocaleDateString()}
                                                    </td>
                                                    <td style={{color : stats_color[status as keyof typeof stats_color]}} className="px-6 py-4">
                                                        {status}
                                                    </td>
                                                </tr>
                                            )

                                        })}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        ) : (
                            <div className={"text-center"}>
                                <p>No Worker Has  Found </p>
                            </div>
                        )}

                    </div>
                </StatsCard>
            </div>
        </div>
    )
}
