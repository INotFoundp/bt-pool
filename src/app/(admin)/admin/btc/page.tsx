import prisma from "@/backend/module/Prisma";
// @ts-ignore
import {FaSearch} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import getUserFromCookie from "@/backend/tools/getUser";
import {revalidatePath} from "next/cache";
import {User} from "@prisma/client";
import {redirect} from "next/navigation";
import {Input} from "@/components/ui/input";


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


    const users = await prisma.user.findMany()

    async function addProfit(formData: FormData) {
        "use server"


        const values = Object?.fromEntries(formData) as { btc_balance: string, ltc_balance: string, user: string }


        const {btc_balance, user, ltc_balance} = values

        try {

            await  prisma.user.update({
                where : {
                    id : user
                },
                data : {
                    btc_balace: +btc_balance,
                    ltc_balance: +ltc_balance
                }
            })
            revalidatePath("./")


        } catch (e) {
            throw new Error(e + "")
        }
    }

    // @ts-ignore
    let sec_user: User | null = null

    if (id) {
        // @ts-ignore
        sec_user = await prisma.user.findUnique({
            where: {
                id: id
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

                    <Input min={0} max={2} step={"0.0000000001"} required={true} placeholder={"btc_balance"}
                           name={"btc_balance"} type={"number"}/>
                    <Input step={"0.0000000001"} required={true} placeholder={"ltc_balance"}
                           name={"ltc_balance"} type={"number"}/>

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

                            return redirect(`/admin/btc?id=${values.user}`)

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
                    {!!sec_user ? (
                        <div className="relative flex flex-col gap-8 overflow-x-auto">
                            <div className={"flex gap-4"}>
                                <span>BTC: </span>
                                <span>{sec_user?.btc_balace}</span>
                            </div>
                            <div className={"flex gap-4"}>
                                <span>LTC</span>
                                <span>{sec_user?.ltc_balance}</span>
                            </div>



                        </div>
                    ) : (
                        <div>
                            no user found
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
