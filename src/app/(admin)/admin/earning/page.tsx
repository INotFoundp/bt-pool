import {FormType} from "@/types/type";
import prisma from "@/backend/module/Prisma";
import {Input} from "@/components/ui/input";
// @ts-ignore
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import getUserFromCookie from "@/backend/tools/getUser";
import {revalidatePath} from "next/cache";
import {Profit} from "@prisma/client";
import {redirect} from "next/navigation";


type EarningPayload = {
    hashrat: string
    total_profit: string
    unit_output: string
    coin_price: string
    usd_total_profit: string
    psp_profit: string
    pplns_profit: string
    solo_profit: string,
    user: string,
    created_at: string
}

export default async function Page({
                                       params,
                                       searchParams,
                                   }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {


    const searchParam = searchParams as { id: string }


    const id = searchParam.id;

    const user = await getUserFromCookie()

    const workerForm: FormType[] = [
        {label: "hashrat", key: "hashrat", type: "text"},
        {label: "total_profit", key: "total_profit", type: "number"},
        {label: "unit_output", key: "unit_output", type: "number"},
        {label: "coin_price", key: "coin_price", type: "number"},
        {label: "usd_total_profit", key: "usd_total_profit", type: "number"},
        {label: "psp_profit", key: "psp_profit", type: "number"},
        {label: "pplns_profit", key: "pplns_profit", type: "number"},
        {label: "solo_profit", key: "solo_profit", type: "number"},

    ]

    let profits: Profit[] = []
    const users = await prisma.user.findMany()

    async function addProfit(formData: FormData) {
        "use server"


        const values = Object?.fromEntries(formData) as EarningPayload

        const date = new Date(values?.created_at).toISOString()

        try {
            const earning = await prisma.profit.create({
                data: {
                    hashrat: values?.hashrat,
                    pplns_profit: +values?.pplns_profit,
                    solo_profit: +values.solo_profit,
                    psp_profit: +values.psp_profit,
                    total_profit: +values.total_profit,
                    unit_output: +values.unit_output,
                    coin_price: +values?.coin_price,
                    user_id: values?.user,
                    usd_total_profit: +values?.usd_total_profit,
                    created_at : date
                }
            })

            revalidatePath("./")


        } catch (e) {
            throw new Error(e + "")
        }
    }

    async function deleteProfit(id: string) {
        "use server"


        try {
           await prisma.profit.delete({
               where : {
                   id : id
               }
           })

            revalidatePath("./")
        } catch (e) {
            throw new Error(e + "")
        }
    }



    if (id) {
        profits = await prisma.profit.findMany({
            where: {
                user_id: id
            }
        })
    }

    return (
        <div className={"flex flex-col gap-6"}>
            <div>
                <div className={"text-xl font-semibold"}>
                    <h4>Earnings</h4>
                </div>
            </div>
            <hr/>
            <div>
                <form action={addProfit} className={"flex flex-col gap-6"}>
                    <div className={"flex gap-2"}>
                        <label htmlFor="user">user :</label>
                        <select className={"border px-2 py-1 rounded-md"} name="user" id="user">
                            {users?.map(user => {
                                return (
                                    <option key={user?.id} value={user?.id}>{user?.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {workerForm?.map(item => {
                        let {Icon, className, description, extra, key, label, placeholder, type} = item;
                        return (
                            <div className={"w-full flex gap-2 md:w-1/3"} key={key}>
                                <label className={"w-2/5"} htmlFor={key}>
                                    {label} :
                                </label>
                                <Input  step={"0.0000000001"} required={true} placeholder={label}
                                       name={key} type={type}/>
                            </div>
                        )
                    })}

                    <div className={"w-full flex gap-2 md:w-1/3"}>
                        <label className={"w-2/5"} htmlFor={"created_at"}>
                            {"created_at"} :
                        </label>
                        <Input step={"0.0000000001"} required={true} placeholder={"date"}
                               name={"created_at"}
                               type={"date"}/>
                    </div>

                    <Button className={"w-24"}>
                        Submit
                    </Button>
                </form>
                <hr className={"my-6"}/>
                <div>
                    <div className={"mb-6 flex flex-col gap-2 "}>
                        <h5 className={"text-2xl   font-semibold"}>List </h5>
                        <form className={"flex gap-2 "} action={async (formData) => {
                            "use server"
                            const values = Object.fromEntries(formData) as { user: string }

                            return redirect(`/admin/earning?id=${values.user}`)

                        }}>
                            <select defaultValue={id ?? ""} className={"border px-2 py-1 rounded-md"} name="user"
                                    id="user">
                                {users?.map(user => {
                                    return (
                                        <option key={user?.id} value={user?.id}>{user?.name}</option>
                                    )
                                })}
                            </select>

                            <Button size={"sm"}>
                                <FaSearch/>
                            </Button>
                        </form>
                    </div>
                    {!!profits?.length ? (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        created_at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        hashrat
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        total_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        unit_output
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        coin_price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        usd_total_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        psp_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        pplns_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        solo_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        options
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {profits?.map(profit => {
                                    const {
                                        id : profit_id,
                                        created_at,
                                        hashrat,
                                        total_profit,
                                        unit_output,
                                        coin_price,
                                        usd_total_profit,
                                        psp_profit,
                                        pplns_profit,
                                        solo_profit,
                                    } = profit
                                    return (
                                        <tr key={id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {new Date(created_at).toLocaleDateString()}
                                            </th>
                                            <td className="px-6 py-4">
                                                {hashrat}
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

                                            <td className="px-6 py-4">
                                                {usd_total_profit}
                                            </td>

                                            <td className="px-6 py-4">
                                                {psp_profit}
                                            </td>
                                            <td className="px-6 py-4">
                                                {pplns_profit}
                                            </td>
                                            <td className="px-6 py-4">
                                                {solo_profit}
                                            </td>

                                            <td className="px-6 py-4">
                                                <Button onClick={async () => {
                                                    "use server"

                                                    await deleteProfit(profit_id)
                                                }} className={"bg-red-500"}
                                                        color={"red"}>Delete</Button>
                                            </td>


                                        </tr>
                                    )
                                })}


                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div>
                            No Worker Found
                        </div>
                    )}


                </div>

            </div>
        </div>
    )
}
