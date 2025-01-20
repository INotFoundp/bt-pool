import React from "react";
import {CoinType} from "@/types/type";
import Image from "next/image";

const CoinTable = ({ coins } : {coins : any}) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white text-gray-800 text-sm border-collapse border ">
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
                    console.log(coin)
                    console.log(`/images/coin/${Name}.png`)

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
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{BlockReward}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{price}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{109.49}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{779.60}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{1190319}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">{"110.45T"}</td>
                                <td className="p-4 text-black font-semibold  text-sm md:text-lg">
                                    <button className="text-blue-500 hover:underline">Guide</button>
                                </td>
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
