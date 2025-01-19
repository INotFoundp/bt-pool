import win from "@/utils/window";


export default function request(
    path: string,
    method: "POST" | "PUT" | "DELETE" | "GET",
    body: object | any,
    success = (res: any) => {

    },
    error = (res: any) => {
        alert(res.data.message)
    }) {
    const promise = fetch('/api' + path, {
        method,
        ...(!!body && ({body: body instanceof FormData ? body : JSON.stringify(body)})),
    })


    promise.catch(() => {
        return false
    })

    promise.then(res => {
        return res.json()
    }).then(respone => {
        const func = respone.ok ? success : error
        func(respone)
    })

}

