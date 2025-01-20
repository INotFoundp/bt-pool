import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import CoinTable from "@/components/tables/CoinTable";
import axios from "axios";
import Image from "next/image";

export default async function Home() {

    let data = []

    try {
        const priceResponse = await axios.get(
            'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'
        );

        const prices = priceResponse.data;


        const miningResponse = await axios.get(
            'https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=BTC,ETH,LTC&tsyms=USD'
        );

        const miningData = miningResponse.data.Data;


        const tableData = Object.keys(prices).map((coin) => {
            const price = prices[coin]?.USD || 'N/A';
            return {...miningData[coin].CoinInfo, price}
        });

        data = tableData ?? []

    } catch (error) {
        console.error('Error fetching data:', error);
    }



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
              <div className="bg-[#282936] text-white w-full flex justify-center text-sm ">
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

          <section className={"w-full py-[60px]"}>
              <div className={"w-full md:w-8/12 bg-white   mx-auto"}>
                  <div className=" h-fit ">
                      <CoinTable coins={data}/>
                  </div>
              </div>
          </section>

          <section className={"min-h-[50dhv] md:h-fit flex flex-col gap-12 py-[60px] w-full bg-gray-200"}>
              <div className={"w-full flex justify-center"}>
                  <h2 className={"text-4xl font-semibold"}>Why People Using BT-Coin</h2>
              </div>

              <div className={"flex md:gap-24 flex-col gap-10 md:flex-row items-center justify-center"}>
                  {Array.from({length: 3}).map((item, index) => (
                      <div key={index}
                           className={"w-[360px] flex flex-col justify-between py-10 px-5 bg-white h-[480px]"}>
                          <div className={"w-full flex justify-center"}>
                              <img src="/images/icon/1.svg" alt="1"/>
                          </div>

                          <div className={"flex flex-col gap-4 items-center"}>
                              <div>
                                  <h5 className={"text-lg"}>Brand Strength</h5>
                              </div>

                              <div>
                                  <p className={"text-center text-sm text-zinc-400 leading-7"}>
                                      The world's top all-inclusive mining pool
                                      Global services in 150+ countries/regions
                                      Covering over 1 million users worldwide
                                      Multi-billion dollar worth of cumulative mining output value
                                  </p>
                              </div>
                          </div>

                      </div>
                  ))}

              </div>
          </section>
          <section className={"min-h-[50dhv]  md:h-fit flex flex-col gap-12 py-[60px] w-full bg-gray-100"}>
              <div className={"w-full flex justify-center"}>
                  <h2 className={"text-4xl font-semibold"}>One-Stop Mining Services, All in BT COIN</h2>
              </div>


              <div className={"flex flex-col md:flex-row justify-center gap-24"}>

                  {Array.from({length : 4}).map((item, index) => (
                      <div className={" flex flex-col  gap-4"}>
                          <div className={"pl-4"}>
                              <Image width={50} height={50} src={"/images/icon/sec2.png"} alt={"sec2"}/>
                          </div>
                          <div className={"pl-4 py-2"}>
                              <h4 className={"text-lg"}>Mining Management</h4>
                          </div>
                          <div className={"flex flex-col gap-4"}>
                              {Array.from({length: 4}).map(item => (
                                  <div className={"flex gap-2 text-sm text-zinc-500 items-center"}>
                                      <span className={"w-1.5 rounded-full bg-[rgb(5,205,205)] h-1.5"}></span>
                                      <p>View mining profit in a click</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  ))}


              </div>

          </section>
      </div>
  );
}
