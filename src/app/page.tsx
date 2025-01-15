import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export default function Home() {

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
                <CarouselItem className="basis-1/3">
                    <div className={"w-[400px]"}>
                        <img src={`/images/hero/${key}.png`} className={"w-full rounded-md"} alt=""/>
                    </div>
                </CarouselItem>
            )
        })
    }

  return (
      <div className={"flex flex-col gap-12"}>
          <section className={"w-full"}>
              <div className={"h-[500px] pt-24 relative"}>
                  <img className={"w-full select-none z-0 absolute h-full top-0 "} src="/images/hero/herobg.jpg"
                       alt=""/>
                  <div className={"z-[999] flex container flex-col  gap-6 items-center py-2 mx-auto h-full w-full"}>
                      <div className={"flex z-50 flex-col gap-3 items-center text-white"}>
                          <h2 className={"text-3xl "}>
                              Pool the World Together by Providing the Best Mining Service
                          </h2>
                          <h3 className={"text-sm text-gray-400"}>
                              BT POOL Blockchain, Making the World a Better Place
                          </h3>
                      </div>

                      <div className={"pb-6"}>
                          <Carousel>
                              <CarouselContent>
                                  <CarouseItems/>
                              </CarouselContent>
                          </Carousel>
                      </div>

                  </div>
              </div>

              <div className={"bg-[#282936]"}>

              </div>
          </section>

          <section className={"bg-[#F5F6FA] w-full h-screen"}>
              <div className={"w-8/12 bg-white  p-2 mx-auto"}>

              </div>
          </section>
      </div>
  );
}
