"use client"

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


    const download = (filename: any, content: any) => {
        var element = document.createElement("a");
        element.setAttribute("href", content);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    const handleDownload = async (e: any) => {


        try {
            const result = await fetch("/BTPOOL_EXPORT Data.xls", {
                method: "GET",
                headers: {}
            });
            const blob = await result.blob();
            const url = URL.createObjectURL(blob);
            download("Export Data", url);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className={`bg-[#282936] text-white rounded shadow h-[290px] ${className} `}>
      <div className={"px-3 py-5 flex flex-row justify-between"}>
        <h5 className={"text-white font-bold text-lg"}>{title}</h5>
          {topButtonTitle &&
              <Button className={"z-40"} onClick={handleDownload} title={topButtonTitle}><DownloadIcon/>{topButtonTitle}
              </Button>}
      </div>
      <hr/>
      <div className={`p-5 ${childrenClassName} text-white h-[calc(100%-68px)] w-full pb-6`}>
        {children}
      </div>
    </div>
  )
}
