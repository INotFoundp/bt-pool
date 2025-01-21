import {FormType} from "@/types/type";
import prisma from "@/backend/module/Prisma";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import getUserFromCookie from "@/backend/tools/getUser";
import {revalidatePath} from "next/cache";
import {$Enums} from "@prisma/client";


type WorkerPayload = {
    minut_profit: string
    hour_profit: string
    rejected_rate: string
    last_submit: string
    user: string
    status: $Enums.WorkerStatus
}

export default async function Page() {

    const user = await getUserFromCookie()

    const workerForm: FormType[] = [
        {label: "minut_profit", key: "minut_profit", type: "number"},
        {label: "hour_profit", key: "hour_profit", type: "number"},
        {label: "rejected_rate", key: "rejected_rate", type: "number"},
        {label: "last_submit", key: "last_submit", type: "date"},
    ]

    const users = await prisma.user.findMany()

    async function addWorker(formData: FormData) {
        "use server"


        const values = Object.fromEntries(formData) as WorkerPayload

        try {
            const worker = await prisma.worker.create({
                data: {
                    minut_profit: +values.minut_profit,
                    rejected_rate: +values.rejected_rate,
                    hour_profit: +values?.hour_profit,
                    user_id: values?.user,
                    status: values?.status,
                    last_submit: new Date(values?.last_submit).toISOString()
                }
            })

            revalidatePath("./")


        } catch (e) {
            throw new Error(e + "")
        }
    }

    async function deleteWorker(id: string) {
        "use server"

        try {
            await prisma.worker.delete({
                where: {
                    id
                }
            })

            revalidatePath("./")
        } catch (e) {
            throw new Error(e + "")
        }
    }

    const workers = await prisma.worker.findMany({
        where: {
            user_id: user?.id
        }
    })


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

                    {workerForm?.map(item => {
                        let {Icon, className, description, extra, key, label, placeholder, type} = item;
                        return (
                            <div className={"w-full flex gap-2 md:w-1/3"} key={key}>
                                <label className={"w-2/5"} htmlFor={key}>
                                    {label} :
                                </label>
                                <Input required={true} placeholder={label} name={key} type={type}/>
                            </div>
                        )
                    })}

                    <div className={"flex gap-2"}>
                        <label htmlFor="user">Status :</label>
                        <select className={"border px-2 py-1 rounded-md"} name="status" id="user">
                            <option value="INACTIVE">In Active</option>
                            <option value="ACTIVE">Active</option>
                            <option value="OFFLINE">Offline</option>
                        </select>
                    </div>

                    <Button className={"w-24"}>
                        Submit
                    </Button>
                </form>
                <hr className={"my-6"}/>
                <div>
                    <div className={"mb-6"}>
                        <h5 className={"text-2xl font-semibold"}>List </h5>
                    </div>
                    {!!workers?.length ? (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        nurmic_id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        minut_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        hour_profit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        rejected_rate
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        last_submit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        options
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {workers?.map(worker => {
                                    const {
                                        id,
                                        status,
                                        minut_profit,
                                        hour_profit,
                                        last_submit,
                                        rejected_rate,
                                        nurmic_id
                                    } = worker
                                    return (
                                        <tr key={id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {nurmic_id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {status}
                                            </td>
                                            <td className="px-6 py-4">
                                                {minut_profit}
                                            </td>
                                            <td className="px-6 py-4">
                                                {hour_profit}
                                            </td>

                                            <td className="px-6 py-4">
                                                {rejected_rate}
                                            </td>

                                            <td className="px-6 py-4">
                                                {new Date(last_submit).toLocaleDateString()}
                                            </td>

                                            <td className="px-6 py-4">
                                                <Button onClick={async () => {
                                                    "use server"

                                                    await deleteWorker(id)
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
