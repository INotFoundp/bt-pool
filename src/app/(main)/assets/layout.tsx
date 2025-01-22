
import React from "react";
import NavigationBar from "@/components/pool/Navbar";
import getUserFromCookie from "@/backend/tools/getUser";
import {redirect} from "next/navigation";

export default async function PoolLayout({children}: { children: React.ReactNode }) {

    const user = await getUserFromCookie()

    if(!user?.id) return redirect("/login")

    return (
        <div
            className={"min-h-screen relative px-2 flex flex-col gap-6 py-24 container md:w-11/12 lg:w-10/12 mx-auto"}>
            <NavigationBar/>


            <svg className={"fixed -right-48 -top-48 "} width="1356" height="860" viewBox="0 0 1356 860"
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
            <svg className={"fixed -bottom-20 -left-48"} width="1469" height="498" viewBox="0 0 1469 498"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" filter="url(#filter0_f_201_2182)">
                    <rect y="450" width="1019" height="261" fill="url(#paint0_linear_201_2182)"></rect>
                </g>
                <defs>
                    <filter id="filter0_f_201_2182" x="-450" y="0" width="1919" height="1161"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                        <feGaussianBlur stdDeviation="225" result="effect1_foregroundBlur_201_2182"></feGaussianBlur>
                    </filter>
                    <linearGradient id="paint0_linear_201_2182" x1="-94.7239" y1="501.47" x2="-65.8058" y2="802.2"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ABBCFF"></stop>
                        <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                    </linearGradient>
                </defs>
            </svg>


            <div>
                {children}
            </div>
        </div>
    )
}
