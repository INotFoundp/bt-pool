import React from "react";
import {CoinType} from "@/types/type";
import Image from "next/image";

const CoinTable = ({ coins } : {coins : any}) => {

    const getRandomNumber = (min : number, max : number) => {
        return (Math.random() * (max - min) + min).toFixed(2)
    }


    const dif = {

        BTC : "110.45/T",
        ETH : "354/G",
        LTC : "64.62/M",
        XRP : "236T/G",
        DOGE : "320/K",
        ADA  : "150/G",
        BNB  : "239.52/G" ,
        SOL  : "43.72/K",
        DOT  : "12.77/G",
        SHIB  : "22/M",
        TRX  : "721.23/M",
        MATIC  : "8.22/K"
    }


    const profit = {
        BTC : "0.0600/T",
        ETH : "354/G",
        LTC : "2.4862/G",
        XRP : "236T/G",
        DOGE : "320/K",
        ADA  : "150/G",
        BNB  : "239.52/G" ,
        SOL  : "43.72/K",
        DOT  : "12.77/G",
        SHIB  : "22/M",
        TRX  : "721.23/M",
        MATIC  : "8.22/K"
    }

    return (
        <div className="overflow-x-auto ">
            <table className="min-w-full bg-white  text-gray-800 text-sm border-collapse border ">
                <thead className={"py-2"}>
                <tr className=" border-b p-4 ">
                    <th className="p-4 text-left">Coin Type</th>
                    <th className="p-4 text-left">Daily Profit</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Pool Hashrate</th>
                    <th className="p-4 text-left">Hashrate</th>
                    <th className="p-4 text-left">Miner</th>
                    <th className="p-4 text-left">Difficulty</th>
                    <th className="p-4 text-left"></th>
                </tr>
                </thead>
                <tbody>
                {coins.map((coin: CoinType, index: number) => {

                        let {
                            AssetLaunchDate,
                            BlockNumber,
                            BlockReward,
                            BlockTime,
                            FullName,
                            Id,
                            ImageUrl,
                            Internal,
                            MaxSupply,
                            Name,
                            NetHashesPerSecond,
                            TotalCoinsMined,
                            Url ,
                            price
                        } = coin;



                        return (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-gray-50"
                            >
                                <td className="p-4 flex items-center space-x-4">

                                    <Image width={40} height={40} src={`/images/coin/${Name}.png`} alt={Name} className="md:w-10 w-6 md:h-10"/>
                                    <div>
                                        <p className={"text-black text-lg font-semibold"}>{Name}</p>
                                        <span className="text-sm text hidden text-black">{"USD"}</span>
                                    </div>
                                </td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">$ {profit[Name as keyof typeof profit]}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{price}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{Name === "BTC" ? getRandomNumber(104 , 105)  : getRandomNumber(1 , 600)}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{Name === "BTC" ? getRandomNumber(792 , 793)  : getRandomNumber(1 , 300)}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{Name === "BTC" ? getRandomNumber(1_180_000 , 1_190_000)  : getRandomNumber(1 , 270_000)}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{dif[Name as keyof typeof dif]}</td>

                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </div>
    );
};

export default CoinTable;
