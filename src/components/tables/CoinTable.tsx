import React from "react";

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
                {coins.map((coin : any, index : number) => (
                    <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-50"
                    >
                        <td className="p-4 flex items-center space-x-4">

                            <img src={coin.icon} alt={coin.name} className="md:w-10 w-6 md:h-10" />
                            <div>
                                <p className={"text-black text-lg font-semibold"} >{coin.name}</p>
                                <span className="text-sm text hidden text-black">{coin.extra}</span>
                            </div>
                        </td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.dailyProfit}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.price}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.poolHashrate}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.hashrate}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.miner}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">{coin.difficulty}</td>
                        <td className="p-4 text-black font-semibold  text-sm md:text-lg">
                            <button className="text-blue-500 hover:underline">Guide</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CoinTable;
