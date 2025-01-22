import {CarouselItem} from "@/components/ui/carousel";
import CoinTable from "@/components/tables/CoinTable";
import axios from "axios";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import getUserFromCookie from "@/backend/tools/getUser";

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

    const fitureCard = {
        one: {
            image: "1.svg",
            content: "Real and transparent mining data, advanced FPPS revenue model, powerful settlement center, punctual payment, rain or shine",
            title: "Revenue Assurance"
        },
        two: {
            image: "2.svg",
            content: "Concise app and webpage operation, easy account registration with cell-phone number or email, independent alarm function, revenue address, miners grouping and watcher link of sharing data.",
            title: "Convenient Management"
        },
        three: {
            image: "3.svg",
            content: "Open source code, free management software of miners and mining farm, official customized overclock firmware increases revenue significantly, blockchain data and technical service provider.",
            title: "Leading Technology"
        },
    }


    const sec2 = {
        one: {
            title: "Convenient Managemen",
            image: "sec2-1",
            list: [
                "egister with Mailbox",
                " Authorize shared",
                " Have an sub-account",
                " Convenient management"
            ]
        }, two: {
            title: "Transparent Earnings",
            image: "sec2-2",
            list: [
                "Full Pay Per Share (FPPS)",
                "Pay-Per-Share (PPS)",
                " Pay-Per-Last-N-Shares (PPLNS)",
                " Solo mining implies that a single miner."
            ]
        }, three: {
            title: "Promt Notice",
            image: "sec2-3",
            list: [
                "Support Hash warning",
                "Get notifications from Mail",
                "You can set a warning to SMS",
                "Get notification on WhatsApp Application"
            ]
        }, four: {
            title: "Stable Service",
            image: "sec2-4",
            list: [
                "Top technical team",
                "Support million miners",
                "Stable Network",
                "Crypto loans available 24/7"
            ]
        },
    }

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


    const user = await getUserFromCookie()

  return (
      <div className={"flex flex-col gap-0 md:gap-12"}>
          <section className={"w-full overflow-hidden left-0 flex items-center  relative bg-[#121212] h-screen max-h-[1080px] min-h-[600px]"}>

              <svg className={"absolute -right-48 -top-48 "} width="1356" height="860" viewBox="0 0 1356 860"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" filter="url(#filter0_f_201_2181)">
                      <rect x="450.088" y="-126.709" width="351.515" height="944.108"
                            transform="rotate(-34.6784 450.088 -126.709)" fill="url(#paint0_linear_201_2181)"></rect>
                  </g>
                  <defs>
                      <filter id="filter0_f_201_2181" x="0.0878906" y="-776.711" width="1726.24" height="1876.4"
                              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_2181"></feGaussianBlur>
                      </filter>
                      <linearGradient id="paint0_linear_201_2181" x1="417.412" y1="59.4717" x2="966.334" y2="603.857"
                                      gradientUnits="userSpaceOnUse">
                          <stop stopColor="#ABBCFF"></stop>
                          <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                      </linearGradient>
                  </defs>
              </svg>

              <div className={"z-40 pt-32 md:pt-0 gap-6 md:gap-0 flex items-center flex-col md:flex-row container mx-auto text-white h-full px-6"}>
                  <div className={"w-full flex flex-col gap-6"}>
                      <div className={"flex flex-col gap-2 text-4xl font-bold "}>
                          <h1>BT Coin Pool the World</h1>
                          <div className={"flex gap-4 items-center "}>
                              <div className={"w-6 h-6 animate-pulse bg-opacity-70 rounded-full bg-blue-700"}></div>
                              <h1 className={""}>
                                  the Best Mining
                                  Service </h1>
                          </div>

                      </div>
                      <div>
                          <p className={"text-[#79808A]"}>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cupiditate
                              fugit
                              inventore molestias, natus quis quo recusandae tenetur? Culpa delectus harum illo ipsum
                              maiores non officia praesentium, tempora voluptates.
                          </p>

                      </div>
                      <div>
                          <Link href={user?.id ? "/pool" : "/login"}>
                              <Button size={"lg"} className={"bg-[#4A6CF7] active:scale-[0.98] hover:bg-[#4A6CF7]/70"}>
                                  Get Started {"->"}
                              </Button>
                          </Link>

                      </div>
                  </div>

                  <div className={"w-full flex justify-center"}>
                      <img src="/images/hero/test.png" className={"w-2/3  "} alt=""/>
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
                  {Object.entries(fitureCard).map(([key, value]) => {
                      let {content, image, title} = value;
                      return (
                          <div key={key}
                               className={"w-[360px] flex flex-col justify-between py-10 px-5 bg-white h-[480px]"}>
                              <div className={"w-full flex justify-center"}>
                                  <img className={"w-[200px]"} src={`/images/icon/${image}`} alt="1"/>
                              </div>

                              <div className={"flex flex-col gap-4 items-center"}>
                                  <div>
                                      <h5 className={"text-lg"}>{title}</h5>
                                  </div>

                                  <div>
                                      <p className={"text-center text-sm text-zinc-400 leading-7"}>
                                          {content}
                                      </p>
                                  </div>
                              </div>

                          </div>
                      )
                  })}

              </div>
          </section>
          <section className={"min-h-[50dhv]  md:h-fit flex flex-col gap-12 py-[60px] w-full bg-gray-100"}>
              <div className={"w-full flex justify-center"}>
                  <h2 className={"md:text-4xl text-xl font-semibold"}>Why Choose BT POOL!?</h2>
              </div>


              <div className={"flex flex-col px-8 items-center md:flex-row justify-center gap-24"}>

                  {Object.entries(sec2).map(([key, value]) => {
                      let {image, list, title} = value;
                      return (
                          <div className={" flex flex-col w-full gap-4"}>
                              <div className={"pl-4 w-full flex justify-center md:justify-normal"}>
                                  <Image width={50} height={50} src={`/images/icon/${image}.png`} alt={"sec2"}/>
                              </div>
                              <div className={"pl-4 w-full text-center py-2"}>
                                  <h4 className={"text-lg"}>{title}</h4>
                              </div>
                              <div className={"flex flex-col gap-4"}>
                                  {list.map(item => (
                                      <div className={"flex gap-2 text-sm text-zinc-500 items-center"}>
                                          <span className={"w-1.5 rounded-full bg-green-500 h-1.5"}></span>
                                          <p>{item}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      )
                  })}


              </div>

          </section>
      </div>
  );
}
