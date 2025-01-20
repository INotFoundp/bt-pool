import {ReactNode} from "react";

export default function StatsCard({children, title ,childrenClassName ="" , className = ""}: {
    children: ReactNode,
    title: string,
    childrenClassName? : HTMLDivElement["className"]
    className?: HTMLDivElement["className"]
}) {
    return (
        <div className={`bg-white rounded shadow h-[290px] ${className} `}>
            <div className={"px-3 py-5"}>
                <h5 className={"text-zinc-800 font-bold text-lg"}>{title}</h5>
            </div>
            <hr/>
            <div className={`p-5 ${childrenClassName} h-[calc(100%-68px)] w-full pb-6`}>
                {children}
            </div>
        </div>
    )
}
