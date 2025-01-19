"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";

import {Pie, PieChart, ResponsiveContainer, Sector} from "recharts";
import React from "react";

export default function Page() {

    const cards = {
        accountInfo: {
            label: "Account Info",
            content: {
                title: "Last 24-Hour Profit",
                value: {
                    val: 0,
                    sub: "BTC",
                    extra: "+ 0 FB"
                },
            },
            sub_contents: [
                {value: "0.00021", sub: "BTC", label: "Total Earnings"},
                {value: "0.00021", sub: "BTC", label: "Account Balance"},
            ]
        },
        hash_rate: {
            label: "Hashrate",
            content: {
                title: "10-Min Avg.",
                value: {
                    val: 0,
                    sub: "",
                    extra: ""
                },
            },
            sub_contents: [
                {value: "0", sub: "", label: "1-Hour Avg."},
                {value: "0", sub: "BTC", label: "1-Day Avg."},
            ]
        },
    }

    const data = [
        {name: 'Group A', value: 100},
        {name: 'Group B', value: 100},
        {name: 'Group C', value: 100},
        {name: 'Group D', value: 100},
    ];


    const renderActiveShape = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value} = props;
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
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={"black"} fill="none"/>
                <circle cx={ex} cy={ey} r={2} fill={"black"} stroke="none"/>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor}
                      fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    return (
        <div className={" flex flex-col gap-6"}>
            <div className={"flex w-full gap-4"}>
                {Object.entries(cards).map(([key, value]) => {
                    let {content, label, sub_contents} = value;
                    return (
                        <StatsCard className={"w-1/3"} key={key} title={label}>
                            <div className={"flex justify-between h-full items-center w-full flex-col gap-4"}>
                                <div className={"flex flex-col items-center gap-4"}>
                                    <h5 className={"text-zinc-700  "}>{content.title}</h5>
                                    <div className={"flex flex-col "}>
                                        <div className={"flex gap-1 justify-end items-end"}>
                                            <span
                                                className={"text-4xl font-thin text-zinc-700 logo-font Dina-font "}>{content.value.val}</span>
                                            <span
                                                className={"text-sm text-zinc-700 font-semibold Dina-font"}>{content.value.sub}</span>
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
                                                        <span className={"text-[#05CDCD]"}>{value1}</span>
                                                        <span className={"text-zinc-500 font-light"}>{sub}</span>
                                                    </div>
                                                    <div
                                                        className={`w-full h-1 bg-gradient-to-r rounded ${(+value1) > 0 ? "from-green-500" : "from-orange-500"}  to-white bg-black`}></div>
                                                    <div className={"text-xs text-zinc-700"}>
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

                <StatsCard className={"w-1/3"} title={"Worker"}>
                    <div className={"w-full flex justify-between h-full"}>
                        <ResponsiveContainer width=" 60%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                />
                            </PieChart>

                        </ResponsiveContainer>

                        <div>
                            test
                        </div>
                    </div>


                </StatsCard>
            </div>

            <div className={"w-full justify-between flex gap-4"}>
                <StatsCard className={"w-2/3"} title={"test"}>
                    <div>

                    </div>
                </StatsCard>
                <StatsCard className={"w-1/3"} title={"jsj 2"}>
                    <div>

                    </div>
                </StatsCard>
            </div>

        </div>
    )
}
