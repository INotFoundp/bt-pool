// @ts-ignore
import {PiTimerLight} from "react-icons/pi";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import Link from "next/link";


const Page = () => {
  return (
      <div className={'container relative overflow-hidden min-h-screen mx-auto text-2xl pt-20'}>



        <Link href={"/blog/3213221"}>
          <Card  className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150}
                   alt={'Image'}/>
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering
                Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering
                Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span>2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </Link>


      </div>
  )
}

export default Page
