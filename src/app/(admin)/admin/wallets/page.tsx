import {FormType} from "@/types/type";
import prisma from "@/backend/module/Prisma";
import {Input} from "@/components/ui/input";
// @ts-ignore
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import getUserFromCookie from "@/backend/tools/getUser";
import {revalidatePath} from "next/cache";
import {WalletAddress} from "@prisma/client";
import {redirect} from "next/navigation";


type WalletPayload = {
    name: string,
    value: string
    user: string
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
        {label: "address", key: "value", type: "text"},

    ]

    let profits: WalletAddress[] = []
    const users = await prisma.user.findMany()

    async function addWallet(formData: FormData) {
        "use server"


        const values = Object?.fromEntries(formData) as WalletPayload


        try {
            const wallet = await prisma.walletAddress.create({
                data: {
                    name: values?.name,
                    value: values?.value,
                    user_id: values?.user

                }
            })

            revalidatePath("./")


        } catch (e) {
            throw new Error(e + "")
        }
    }

    async function deleteWallet(id: string) {
        "use server"


        try {
            await prisma.walletAddress.delete({
                where: {
                    id: id
                }
            })

            revalidatePath("./")
        } catch (e) {
            throw new Error(e + "")
        }
    }


    if (id) {
        profits = await prisma.walletAddress.findMany({
            where: {
                user_id: id
            }
        })
    }

    return (
        <div className={"flex flex-col gap-6"}>
            <div>
                <div className={"text-xl font-semibold"}>
                    <h4>Wallets</h4>
                </div>
            </div>
            <hr/>
            <div>
                <form action={addWallet} className={"flex flex-col gap-6"}>
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

                    <div className={"flex gap-2"}>
                        <label htmlFor="user">Coin :</label>
                        <select className={"border px-2 py-1 rounded-md"} name="name" id="name">
                            <option value={"BTC"}>BTC</option>
                            <option value={"LTC"}>LTC</option>
                        </select>
                    </div>

                    {workerForm?.map(item => {
                        let {Icon, className, description, extra, key, label, placeholder, type} = item;
                        return (
                            <div className={"w-full flex gap-2 md:w-1/3"} key={key}>
                                <label className={"w-2/5"} htmlFor={key}>
                                    {label} :
                                </label>
                                <Input step={"0.0000000001"} required={true} placeholder={label}
                                       name={key} type={type}/>
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

                            return redirect(`/admin/wallets?id=${values.user}`)

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
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Value
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Options
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {profits?.map(profit => {
                                    const {
                                        name,
                                        value
                                        , user_id
                                        , id
                                    } = profit
                                    return (
                                        <tr key={id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {name}
                                            </th>
                                            <td className="px-6 py-4">
                                                <form action={async (data) => {
                                                    "use server"

                                                    const values = Object?.fromEntries(data)

                                                    await prisma.walletAddress.update({
                                                        where: {
                                                            id: id
                                                        },
                                                        data: {
                                                            value: values.value + ""
                                                        }
                                                    })

                                                    revalidatePath("./")

                                                }} className={'flex  gap-2 items-center'}>
                                                    <Input name={"value"} className={"w-[160px]"} defaultValue={value}/>
                                                    <Button className={"active:scale-[0.96]"} size={"sm"}>Change</Button>
                                                </form>
                                            </td>

                                            <td className="px-6 py-4">
                                                <Button onClick={async () => {
                                                    "use server"

                                                    await deleteWallet(id)
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
