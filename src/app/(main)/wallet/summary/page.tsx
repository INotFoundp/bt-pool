"use client"

import StatsCard from "@/components/cards/poolDahboard/StatsCard";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
// @ts-ignore
import {CiEdit} from "react-icons/ci";

// @ts-ignore
import {IoIosLogIn} from "react-icons/io";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import useGetData from "@/hooks/useGetData";
import Loader from "@/components/theme/Loader";
import toast from "react-hot-toast";

export default function Page() {

    const {data: user, loading} = useGetData("/user/me")

    const [wallet, setWallet] = useState("")

    const coins = [
        {
            Id: '1182',
            Name: 'BTC',
            FullName: 'Bitcoin',
            Internal: 'BTC',
            ImageUrl: '/media/37746251/btc.png',
            Url: '/coins/btc/overview',
            NetHashesPerSecond: 730951201779573200000,
            BlockNumber: 880608,
            BlockTime: 196,
            BlockReward: 3.125,
            TotalCoinsMined: 19814384,
            AssetLaunchDate: '2009-01-03',
            MaxSupply: 20999999.9769,
            price: 105119.27
        },
        {
            Id: '7605',
            Name: 'ETH',
            FullName: 'Ethereum',
            Internal: 'ETH',
            ImageUrl: '/media/37746238/eth.png',
            Url: '/coins/eth/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 21692994,
            BlockTime: 12,
            BlockReward: 2.044338104121828,
            TotalCoinsMined: 120504823.311508,
            AssetLaunchDate: '2015-07-30',
            MaxSupply: -1,
            price: 3382.03
        },
        {
            Id: '3808',
            Name: 'LTC',
            FullName: 'Litecoin',
            Internal: 'LTC',
            ImageUrl: '/media/37746243/ltc.png',
            Url: '/coins/ltc/overview',
            NetHashesPerSecond: 2011199636132255,
            BlockNumber: 2832901,
            BlockTime: 138,
            BlockReward: 7.06099988,
            TotalCoinsMined: 75453683.2334713,
            AssetLaunchDate: '2011-10-08',
            MaxSupply: 84000000,
            price: 117.29
        },
        {
            Id: '5031',
            Name: 'XRP',
            FullName: 'XRP',
            Internal: 'XRP',
            ImageUrl: '/media/38553096/xrp.png',
            Url: '/coins/xrp/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 93670015,
            BlockTime: 4,
            BlockReward: 0,
            TotalCoinsMined: 99986637553,
            AssetLaunchDate: '2012-09-26',
            MaxSupply: 100000000000,
            price: 3.168
        },
        {
            Id: '4432',
            Name: 'DOGE',
            FullName: 'Dogecoin',
            Internal: 'DOGE',
            ImageUrl: '/media/37746339/doge.png',
            Url: '/coins/doge/overview',
            NetHashesPerSecond: 1948861635850382,
            BlockNumber: 5558074,
            BlockTime: 64,
            BlockReward: 10000,
            TotalCoinsMined: 147753236383.705,
            AssetLaunchDate: '2013-12-08',
            MaxSupply: -1,
            price: 0.3578
        },
        {
            Id: '321992',
            Name: 'ADA',
            FullName: 'Cardano',
            Internal: 'ADA',
            ImageUrl: '/media/37746235/ada.png',
            Url: '/coins/ada/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 11392599,
            BlockTime: 20,
            BlockReward: 0,
            TotalCoinsMined: 45000000000,
            AssetLaunchDate: '2017-09-23',
            MaxSupply: 45000000000,
            price: 0.9977
        },
        {
            Id: '204788',
            Name: 'BNB',
            FullName: 'Binance Coin',
            Internal: 'BNB',
            ImageUrl: '/media/40485170/bnb.png',
            Url: '/coins/bnb/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 46041310,
            BlockTime: 3,
            BlockReward: 0,
            TotalCoinsMined: 142481096.07,
            AssetLaunchDate: '2019-04-18',
            MaxSupply: 100000000,
            price: 686.87
        },
        {
            Id: '934443',
            Name: 'SOL',
            FullName: 'Solana',
            Internal: 'SOL',
            ImageUrl: '/media/37747734/sol.png',
            Url: '/coins/sol/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 294316208,
            BlockTime: 0.637,
            BlockReward: 0,
            TotalCoinsMined: 592651161.5973365,
            AssetLaunchDate: '2020-03-31',
            MaxSupply: -1,
            price: 260.46
        },
        {
            Id: '935731',
            Name: 'DOT',
            FullName: 'Polkadot',
            Internal: 'DOT',
            ImageUrl: '/media/39334571/dot.png',
            Url: '/coins/dot/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 0,
            BlockTime: 6,
            BlockReward: 0,
            TotalCoinsMined: 1541629597.10267,
            AssetLaunchDate: '2020-05-26',
            MaxSupply: -1,
            price: 6.419
        },
        {
            Id: '940776',
            Name: 'SHIB',
            FullName: 'Shiba Inu',
            Internal: 'SHIB',
            ImageUrl: '/media/37747199/shib.png',
            Url: '/coins/shib/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 0,
            BlockTime: 0,
            BlockReward: 0,
            TotalCoinsMined: 589606483736612,
            AssetLaunchDate: '2020-07-31',
            MaxSupply: -1,
            price: 0.0000202
        },
        {
            Id: '310829',
            Name: 'TRX',
            FullName: 'TRON',
            Internal: 'TRX',
            ImageUrl: '/media/37746879/trx.png',
            Url: '/coins/trx/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 69017869,
            BlockTime: 3,
            BlockReward: 16,
            TotalCoinsMined: 86137640200.44958,
            AssetLaunchDate: '2018-06-25',
            MaxSupply: -1,
            price: 0.2586
        },
        {
            Id: '930246',
            Name: 'MATIC',
            FullName: 'Polygon',
            Internal: 'MATIC',
            ImageUrl: '/media/37746047/matic.png',
            Url: '/coins/matic/overview',
            NetHashesPerSecond: 0,
            BlockNumber: 20457448,
            BlockTime: 2,
            BlockReward: 0.4,
            TotalCoinsMined: 9971951068.27783,
            AssetLaunchDate: '2020-05-30',
            MaxSupply: -1,
            price: 0.4392
        }
    ]

    if (loading) return <Loader/>


    return (
        <div>
            <StatsCard className={" h-fit w-full"} title={"My Assets"}>
                <div>
                    <div className={"w-full overflow-auto flex items-center justify-between"}>
                        <div className={'px-8 text-sm md:text-xl'}>
                            <div className={"flex flex-col gap-5"}>
                                <h4 className={"text-gray-500"}>
                                    Est. Assets
                                    (BTC)
                                </h4>
                                <div className={"flex items-center gap-2"}>
                                    <span className={"font-bold hidden md:block q"}>Your Balance :</span>
                                    <h5 className={"font-semibold text-sm md:text-2xl"}>
                                        {user?.btc_balace} ~ ${(Number(user?.btc_balace) * 105518).toLocaleString()}
                                    </h5>
                                </div>

                            </div>
                        </div>

                        <div className={"z-40"}>
                            <Link href={"summary/withdraw"}>
                                <Button
                                    size={"lg"}
                                    className={"bg-[#4A6CF7]/30 w-full text-lg rounded active:scale-[0.98] hover:bg-[#4A6CF7]/70"}
                                    variant={"default"}>
                                    Withdraw
                                    <IoIosLogIn size={30} className={"text-xl"}/>
                                </Button>
                            </Link>

                        </div>

                    </div>

                    <hr className={"my-6"}/>

                    <div>

                        <div className="relative overflow-x-auto  sm:rounded-lg">
                            <table
                                className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-500 uppercase w-full dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 text-xs  py-3">
                                        Coin Type
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Account Balance
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Auto withdrawal
                                    </th>

                                    <th scope="col" className="px-6 text-xs py-3">
                                        Market Value
                                    </th>
                                    <th scope="col" className="px-6 text-xs py-3">
                                        Operation
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {coins.map(item => {
                                    let {Name, price} = item;
                                    return (
                                        <tr className="z-40   text-white bg-[#282936]/50 last:border-0 border-b dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 items-center flex gap-6  dark:text-white">
                                                <img className={"w-[40px]"} src={`/images/coin/${Name}.png`}
                                                     alt={Name}/>
                                                <span className={"text-lg"}>{Name}</span>
                                            </th>
                                            <td className="px-6 text-lg py-4">
                                                {Name === "BTC" ? user?.btc_balace : 0}
                                            </td>
                                            <td className="px-6 flex gap-4 items-center text-lg py-4">
                                                {(Name === "BTC" && user?.email === "reza.naderkhani42@gmail.com") ? "bc1qkw7tdjkhec086wla4hk4k8yfg70e4cvaneeskn" : "Empty"}
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <CiEdit className={"text-xl cursor-pointer"}/>
                                                    </DialogTrigger>
                                                    <DialogContent className="bg-[#121212] text-white sm:max-w-[425px]">
                                                        <DialogHeader>
                                                            <DialogTitle>Edit Wallet Address</DialogTitle>
                                                            <DialogDescription>
                                                                Enter your wallet address here.When it reaches to 0.05
                                                                BTC, withdrawal confirms automatic.
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <label htmlFor="name" className="text-right">
                                                                    Wallet
                                                                </label>
                                                                <Input onChange={(e) => {
                                                                    setWallet(e.target.value)
                                                                }} required={true} id="name"
                                                                       className="col-span-3"/>
                                                            </div>

                                                        </div>
                                                        <DialogFooter>
                                                            <Button onClick={() => {
                                                                if (!wallet.length) return toast.error("Enter Wallet")

                                                                setTimeout(() => {
                                                                    toast.error("Invalid Address Format")
                                                                }, 1000)
                                                            }} type="submit">Save changes</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </td>
                                            <td className="px-6 text-lg py-4">
                                                {price}
                                            </td>
                                            <td className="px-6 text-lg w-1/6 py-4">
                                                <Link href={`summary/withdraw?type=${Name}`}>
                                                    <Button

                                                        size={"lg"}
                                                        className={"bg-orange-500/30 w-fit text-lg rounded active:scale-[0.98] hover:bg-orange-500/70"}
                                                        variant={"default"}>
                                                        Withdraw
                                                        <IoIosLogIn size={30} className={"text-xl"}/>
                                                    </Button>
                                                </Link>

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
