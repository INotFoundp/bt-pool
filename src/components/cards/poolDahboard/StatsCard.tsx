import {ReactNode} from "react";
import {Button} from "@/components/ui/button";
import {DownloadIcon} from "lucide-react";

export default function StatsCard({children, title, childrenClassName = "", className = "", topButtonTitle = ""}: {
  children: ReactNode,
  title: string,
  childrenClassName?: HTMLDivElement["className"]
  className?: HTMLDivElement["className"],
  topButtonTitle?: string
}) {
  return (
    <div className={`bg-[#282936] text-white rounded shadow h-[290px] ${className} `}>
      <div className={"px-3 py-5 flex flex-row justify-between"}>
        <h5 className={"text-white font-bold text-lg"}>{title}</h5>
        {topButtonTitle && <Button title={topButtonTitle}><DownloadIcon />{topButtonTitle}</Button>}
      </div>
      <hr/>
      <div className={`p-5 ${childrenClassName} text-white h-[calc(100%-68px)] w-full pb-6`}>
        {children}
      </div>
    </div>
  )
}
