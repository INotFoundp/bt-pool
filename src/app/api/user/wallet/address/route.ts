import getUserFromCookie from "@/backend/tools/getUser";
import {User, WalletAddress} from "@prisma/client";
import response from "@/backend/tools/respones";

export async function GET() {
    // @ts-ignore
    const user: User & { wallet_address: WalletAddress[] } = await getUserFromCookie({
        wallet_address: true
    })

    return response(user?.wallet_address)
}