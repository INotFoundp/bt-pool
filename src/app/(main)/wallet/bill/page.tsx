"use client"
import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import React from "react";
import useGetData from "@/hooks/useGetData";
import {Bill} from "@prisma/client";
import Loader from "@/components/theme/Loader";

export default function Page() {

    const {data, loading} = useGetData<Bill[]>("user/wallet/bills")

    if (loading) return <Loader/>

    return (
        <div>
            <StatsCard title={"My Bills"}>
                <div>
                    <div>

                        <div className="relative overflow-x-auto  sm:rounded-lg">
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-500 uppercase w-full dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 text-xs  py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 text-xs  py-3">
                                        Coin Type
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Type
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Value Change
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Balance
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {data?.map?.(iten => {

                                    const {id, value_change, type, coin_type, balance, time, user_id} = iten

                                    return (
                                        <tr className="z-40   text-white bg-[#282936]/50 last:border-0 border-b dark:border-gray-700">

                                            <td className="px-6 text-lg py-4">
                                                {new Date(time).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 text-lg py-4">
                                                {coin_type}
                                            </td>
                                            <td className="px-6 text-lg py-4">
                                                {type}
                                            </td>
                                            <td className="px-6 text-lg py-4">
                                                {value_change}
                                            </td>
                                            <td className="px-6 text-lg py-4">
                                                {balance}
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
    )
}
