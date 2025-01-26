"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";

import dataChart from "../../../../../public/data/chart.json"


import {Area, AreaChart, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";
import useGetData from "@/hooks/useGetData";
import {User, Worker} from "@prisma/client";
import Loader from "@/components/theme/Loader";
import data from "../../../../../public/data/chart.json";

export default function Page() {

    const [chartData, setChartData] = useState([{name: "to day", Hashrate: 0}])
    const {data: user, loadingUser} = useGetData<User>("/user/me")
    const {data: poolData, loading} = useGetData("/user/pool")

    const [activeSeg, setActiveSeg] = useState("minute")




    const renderActiveShape = (props : any) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    useEffect(() => {
        if (!loadingUser) {
            if (user?.email === "reza.naderkhani42@gmail.com") {

                const datas = dataChart?.map(item => {
                    // @ts-ignore
                    const newHashrate = Number(item.Hashrate?.slice?.(0, -1)) ?? 0

                    return {...item, Hashrate: newHashrate}
                })

                setChartData(datas as any)

            }
        }
    }, [user])

    const segmentButtons = {
        all: {
            label: "Summary",
            value: "all"
        },

    }




    const {
        daily_hashrate, balance, hsashrate, hour_hashrate, last_profit, total_earning, worker,
    } = poolData ?? {}


    if (loading || loadingUser) return <Loader/>

    const cards = {
        accountInfo: {
            label: "Account Info",
            content: {
                title: "Last 24-Hour Profit",
                value: {
                    val: last_profit,
                    sub: "BTC",
                    extra: "+ 0 FB"
                },
            },
            sub_contents: [
                {value: user?.btc_balace, sub: "BTC", label: "Total Earnings"},
                {value: user?.btc_balace, sub: "BTC", label: "Account Balance"},
            ]
        },
        hash_rate: {
            label: "Hashrate",
            content: {
                title: "10-Min Avg.",
                value: {
                    val: hsashrate,
                    sub: "",
                    extra: ""
                },
            },
            sub_contents: [
                {value: hour_hashrate, sub: "", label: "1-Hour Avg."},
                {value: daily_hashrate, sub: "BTC", label: "1-Day Avg."},
            ]
        },
    }


    function filterAndGetLength(data: Worker[], key: Worker["status"]) {
        return data.filter(item => item.status === key).length ?? 0
    }

    const workers = {
        active: {
            label: "Active",
            count: filterAndGetLength(worker as Worker[], "ACTIVE"),
            color: "green"

        },
        offline: {
            label: "Offline",
            count: filterAndGetLength(worker, "OFFLINE"),
            color: "red"
        },
        inactive: {
            label: "In Active",
            count: filterAndGetLength(worker as Worker[], "INACTIVE"),
            color: "orange"
        },

    }

    const data = [
        {name: 'Active', value: workers.active.count ?? 0},
        {name: 'offline', value: workers.offline.count ?? 0},
        {name: 'In Active', value: workers.inactive.count ?? 0},

    ];



    return (
        <div className={" flex flex-col  gap-6"}>
            <div className={"flex flex-col md:flex-row w-full gap-4"}>
                {Object.entries(cards).map(([key, value]) => {
                    let {content, label, sub_contents} = value;

                    return (
                        <StatsCard className={" w-full md:w-1/3"} key={key} title={label}>
                            <div className={"flex justify-between h-full items-center w-full flex-col gap-4"}>
                                <div className={"flex flex-col items-center gap-4"}>
                                    <h5 className={"text-white "}>{content.title}</h5>
                                    <div className={"flex flex-col "}>
                                        <div className={"flex gap-1 justify-end items-end"}>
                                            <span
                                                className={"text-4xl font-thin text-white logo-font Dina-font "}>{content.value.val}</span>
                                            <span
                                                className={"text-sm text-white font-semibold Dina-font"}>{content.value.sub}</span>
                                        </div>
                                        <span className={"text-xs  justify-end"}>{content.value.extra}</span>
                                    </div>
                                </div>
                                <div className={"w-full"}>
                                    <div className={'flex justify-between px-8 gap-20 w-full'}>
                                        {sub_contents.map(item => {
                                            let {label: label1, sub, value: value1} = item;

                                            return (
                                                <div className={"w-full flex flex-col gap-1"} key={label1}>
                                                    <div className={"flex gap-1 text-xs"}>
                                                        <span className={"text-white"}>{value1}</span>
                                                        <span className={"text-white font-light"}>{sub}</span>
                                                    </div>
                                                    <div
                                                        className={`w-full h-1 bg-gradient-to-r rounded ${(+value1) > 0 ? "from-green-500" : "from-orange-500"}  to-white bg-black`}></div>
                                                    <div className={"text-xs text-white"}>
                                                        {label1}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </StatsCard>
                    )
                })}

                <StatsCard className={"w-full md:w-1/3"} title={"Worker"}>
                    <div  className={"w-full flex justify-between h-full"}>
                        <ResponsiveContainer width=" 60%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx="50%"

                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill={"#EEA11B"}
                                    dataKey="value"
                                />
                            </PieChart>

                        </ResponsiveContainer>

                        <div className={"w-[40%] flex justify-center flex-col gap-3"}>

                            <div className={"w-full flex items-center  "}>
                                <div style={{background: "white"}} className={`w-3 h-3 rounded mr-2 `}></div>
                                <div className={"text-sm flex gap-2"}>
                                            <span className={"text-white"}>
                                            {worker?.length}
                                            </span>
                                    <span className={" text-[#79808A]"}>
                                             {"All"}
                                            </span>
                                </div>
                            </div>

                            {Object.entries(workers).map(([key, value]) => {
                                let {count, label, color} = value;



                                return (
                                    <div className={"w-full flex items-center  "}>
                                        <div style={{background: color}} className={`w-3 h-3 rounded mr-2 `}></div>
                                        <div className={"text-sm flex gap-2"}>
                                            <span className={"text-white"}>
                                            {count}
                                            </span>
                                            <span className={" text-[#79808A]"}>
                                             {label}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>


                </StatsCard>
            </div>
            <div>
                <StatsCard user={user} className={"w-full h-fit "} title={"Hashrate"} topButtonTitle={'Export Data'}>


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
                    <div className={" md:h-[250px] h-[400px]"}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                key={chartData?.length}
                                width={500}
                                height={400}
                                data={chartData}
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
            <div className={"w-full flex-col md:flex-row  justify-between flex gap-4"}>
                <StatsCard className={"md:w-2/3 w-full md:h-[290px] h-fit"} title={"Stratum URL"}>
                    <div className={"flex md:gap-2 gap-4 flex-col md:flex-row "}>
                        <div className={"flex w-full md:border-r md:border-b-0 border-b   flex-col gap-4"}>
                            <div>
                                <span className={"p-2 text-sm  border"}>Recommended</span>
                            </div>

                            <div className={"flex flex-col gap-4"}>
                                <div>
                                    <h3 className={"text-zinc-500"}>BTC Stratum URL:</h3>
                                    <span className={"text-sm"}>
                                        stratum+tcp://btc.bt-pool.io:3333
                                    </span>
                                </div>
                                <div>
                                    <h3 className={"text-zinc-500"}>BTC Smart Stratum URL:</h3>
                                    <span className={"text-sm"}>
                                        stratum+tcp://bitcoin.bt-pool.io:3333
                                    </span>
                                </div>
                            </div>

                            <div>
                                <small className={"text-zinc-700"}>
                                    Note: Port 25/443 is available too.
                                </small>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col justify-between items-start"}>
                            <p className={"text-sm font-semibold text-zinc-400  leading-8"}>
                                Create a Miner ID in the form of account name BT-POOL or BT-POOL.workerID and any
                                password for it. WorkerID should consist of numbers and lowercase letters no longer than
                                64 characters.
                            </p>


                        </div>
                    </div>
                </StatsCard>
                <StatsCard className={" w-full md:w-1/3"} title={"After-Sale Service"}>
                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex justify-between text-sm items-center"}>
                            <span className={"text-zinc-400"}>Email</span>
                            <span className={"text-[#05CDCD]"}>Support@btpool.net</span>
                        </div>
                        <div className={"flex justify-between text-sm items-center"}>
                            <span className={"text-zinc-400"}>Telegram</span>
                            <span className={"text-[#05CDCD]"}>@BT_POOL</span>
                        </div>
                    </div>
                </StatsCard>
            </div>

        </div>
    )
}
