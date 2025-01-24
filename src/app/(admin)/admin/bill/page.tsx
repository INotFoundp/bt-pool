import {FormType} from "@/types/type";
import prisma from "@/backend/module/Prisma";
import {Input} from "@/components/ui/input";
// @ts-ignore
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import getUserFromCookie from "@/backend/tools/getUser";
import {revalidatePath} from "next/cache";
import {Bill} from "@prisma/client";
import {redirect} from "next/navigation";


type WorkerPayload = {
    time: string
    coin_type: string
    type: string
    value_change: string
    balance: string
    user : string
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

    const billForm: FormType[] = [
        {label: "time", key: "time", type: "date"},
        {label: "coin_type", key: "coin_type", type: "text"},
        {label: "type", key: "type", type: "text"},
        {label: "value_change", key: "value_change", type: "number"},
        {label: "balance", key: "balance", type: "number"},
    ]

    const users = await prisma.user.findMany()

    async function addWorker(formData: FormData) {
        "use server"


        const values = Object.fromEntries(formData) as WorkerPayload

        try {
            const worker = await prisma.bill.create({
                data: {
                    type: values?.type,
                    balance: +values.balance,
                    time: new Date(values?.time).toISOString(),
                    coin_type: values.coin_type,
                    value_change: +values?.value_change,
                    user_id: values?.user,

                }
            })

            revalidatePath("./")


        } catch (e) {
            throw new Error(e + "")
        }
    }

    async function deleteBill(id: string) {
        "use server"

        try {
            await prisma.bill.delete({
                where: {
                    id
                }
            })

            revalidatePath("./")
        } catch (e) {
            throw new Error(e + "")
        }
    }

    let bill: Bill[] = []


    if (id) {
        bill = await prisma.bill.findMany({
            where: {
                user_id: id
            }
        })
    }

    return (
        <div className={"flex flex-col gap-6"}>
            <div>
                <div className={"text-xl font-semibold"}>
                    <h4>Workers</h4>
                </div>
            </div>
            <hr/>
            <div>
                <form action={addWorker} className={"flex flex-col gap-6"}>
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

                    {billForm?.map(item => {
                        let {Icon, className, description, extra, key, label, placeholder, type} = item;
                        return (
                            <div className={"w-full flex gap-2 md:w-1/3"} key={key}>
                                <label className={"w-2/5"} htmlFor={key}>
                                    {label} :
                                </label>
                                <Input  min={0} max={2} step={"0.0000000001"} required={true} placeholder={label} name={key} type={type}/>
                            </div>
                        )
                    })}


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

                            return redirect(`/admin/bill?id=${values.user}`)

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
                    {!!bill?.length ? (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        balance
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        coin_type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        value_change
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        options
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {bill?.map(worker => {
                                    const {
                                        id,
                                        time, type, balance, coin_type, value_change
                                    } = worker
                                    return (
                                        <tr key={id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {time.toLocaleDateString()}
                                            </th>
                                            <td className="px-6 py-4">
                                                {type}
                                            </td>
                                            <td className="px-6 py-4">
                                                {balance}
                                            </td>
                                            <td className="px-6 py-4">
                                                {coin_type}
                                            </td>

                                            <td className="px-6 py-4">
                                                {value_change}
                                            </td>

                                            <td className="px-6 py-4">
                                                <Button onClick={async () => {
                                                    "use server"

                                                    await deleteBill(id)
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
