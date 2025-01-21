import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Card} from "@/components/ui/card";
import Image from "next/image";
// @ts-ignore
import {PiTimerLight} from "react-icons/pi";
import {
  Pagination,
  PaginationContent, PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";


const Page = () => {
  return (
    <div className={'container mx-auto text-2xl pt-20'}>
      <Tabs defaultValue={'all'} className={'w-full text-2xl pb-5'}>
        <TabsList className={'text-2xl overflow-auto shadow-2xl mb-5 rounded-md border border-gray-300 p-6 w-full justify-start'}>
          <TabsTrigger value="all" className={'text-[17px]'}>All</TabsTrigger>
          <TabsTrigger className={'text-[17px]'} value="update">Company Update</TabsTrigger>
          <TabsTrigger className={'text-[17px]'} value="popular">Popular</TabsTrigger>
          <TabsTrigger className={'text-[17px]'} value="features">Features</TabsTrigger>
          <TabsTrigger className={'text-[17px]'} value="halving">BTC Halving</TabsTrigger>
          <TabsTrigger className={'text-[17px]'} value="mining">Mining</TabsTrigger>
        </TabsList>
        <TabsContent className={'flex flex-col gap-4'} value="all">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="update">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="popular">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="features">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="halving">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="blockchain">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent className={'flex flex-col gap-4'} value="mining">
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
          <Card className={'bg-white flex p-4 gap-4'}>
            <Image src={'https://static.viabtc.com/article/c31b1d735980e6897f83a02d19252e64.png'} width={200} height={150} alt={'Image'} />
            <div className="flex flex-col gap-4">
              <h4 className={'font-bold text-xl'}>What is Junkcoin (JKC)? How to Mine Junkcoin (JKC)</h4>
              <p className={'font-normal text-[17px] leading-5 line-clamp-2 text-black/60'}>
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
                This article provides a thorough guide for miners looking to understand and engage in JKC mining, covering Junkcoin's background, its token distribution mechanism, potential returns,
              </p>
              <div className="flex text-[17px] text-black/50 items-center gap-2">
                <PiTimerLight size={23} color='#17d0d0'/>
                <span >2025-01-06 13:59</span>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="pagination-btpool pb-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className={'text-black/40'} href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={'bg-[#17d0d0] text-white'} href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}

export default Page
