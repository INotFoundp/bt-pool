import {NextResponse} from "next/server";

export default function response(obj: any, statusCode = 200, optional: any = "") {
    return NextResponse.json({
        ...(obj && {data: obj}),
        ok: statusCode < 400, ...(optional && {optional})
    }, {status: statusCode})
}


export  function error(message: string, statusCode = 400) {
    return response({message}, statusCode)
}