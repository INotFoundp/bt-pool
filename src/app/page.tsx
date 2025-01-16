import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import CoinTable from "@/components/tables/CoinTable";

export default function Home() {


    const sampleCoins = [
        {
            name: "BTC",
            icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", // Example URL
            extra: "+FB, NMC, SYS, ELA",
            dailyProfit: "$0.0570 /T",
            price: "99952.23 USD",
            poolHashrate: "116.83 EH/s",
            hashrate: "797.94 EH/s",
            miner: "1287338",
            difficulty: "110.45T",
        },
        {
            name: "BCH",
            icon: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png", // Example URL
            extra: "+SYS",
            dailyProfit: "$0.0566 /T",
            price: "449.94 USD",
            poolHashrate: "546.55 PH/s",
            hashrate: "3.66 EH/s",
            miner: "10116",
            difficulty: "497.80G",
        },
        // Add more coins as needed
    ];


    const CarouseItems = () => {

        const images = {
            1: {
                href: "/"
            },
            2: {
                href: "/"
            }
            , 3: {
                href: "/"
            },
        }

        return Object.entries(images).map(([key, value]) => {
            let {href} = value;
            return (
                <CarouselItem className=" flex w-full justify-center overflow-hidden md:basis-1/2 lg:basis-1/3">
                    <div className={"w-full md:w-[340px]"}>
                        <img src={`/images/hero/${key}.png`} className={"w-full rounded-none md:rounded-md"} alt=""/>
                    </div>
                </CarouselItem>
            )
        })
    }

    const announcements = [
        "Announcement on Suspension of LKY Deposit...",
        "Announcement on BELLS Settlement Frequ...",
        "Announcement on Winner List of Holiday Seas...",
    ];

  return (
      <div className={"flex flex-col gap-0 md:gap-12"}>
          <section className={"w-full"}>
              <div className={"md:h-[500px] h-fit pt-16 md:pt-24 relative"}>
                  <img className={"w-full hidden md:block  select-none z-0 absolute h-full top-0 "} src="/images/hero/herobg.jpg"
                       alt=""/>
                  <div className={"z-[999] flex container flex-col  gap-0 md:gap-6 items-center py-0 md:py-2 mx-auto h-full w-full"}>
                      <div className={" z-50 hidden md:flex flex-col gap-3 items-center text-white"}>
                          <h2 className={"text-3xl "}>
                              Pool the World Together by Providing the Best Mining Service
                          </h2>
                          <h3 className={"text-sm text-gray-400"}>
                              BT POOL Blockchain, Making the World a Better Place
                          </h3>
                      </div>

                      <div className={"md:pb-6  pb-0 overflow-hidden w-full"}>
                          <Carousel className={"w-full overflow-hidden flex justify-center"} >
                              <CarouselContent>
                                  <CarouseItems/>
                              </CarouselContent>
                          </Carousel>
                      </div>

                  </div>
              </div>
              <div className="bg-[#282936] text-white w-full flex justify-center text-sm py-4">
                  <div className="container mx-auto flex  justify-center gap-8 items-center space-x-4">
                      <div className="flex space-x-10 overflow-x-auto scrollbar-hide">
                          {announcements.map((announcement, index) => (
                              <span key={index} className="whitespace-nowrap">
                                 {announcement}
                              </span>
                          ))}
                      </div>
                      <a href="#" className="text-blue-400 hover:underline whitespace-nowrap">
                          More &gt;
                      </a>
                  </div>
              </div>
          </section>

          <section className={"w-full h-screen"}>
              <div className={"w-full md:w-8/12 bg-white   mx-auto"}>
                  <div className="  min-h-screen">
                      <CoinTable coins={sampleCoins}/>
                  </div>
              </div>
          </section>
      </div>
  );
}
