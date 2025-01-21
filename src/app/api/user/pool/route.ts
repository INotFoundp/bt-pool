import {NextRequest} from "next/server";
import getUserFromCookie from "@/backend/tools/getUser";
import response from "@/backend/tools/respones";
import {User, Worker} from "@prisma/client";

export  async function GET(req: NextRequest) {
    // @ts-ignore
    const user : User & {worker : Worker[]}  = await getUserFromCookie({worker : true})


    const {daily_hashrate, balance, hsashrate, hour_hashrate, last_profit, total_earning , worker} = user ?? {}
    const data = {daily_hashrate , balance , hsashrate , hour_hashrate , last_profit , total_earning , worker }

    return response({...data})

}