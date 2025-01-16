import Image from "next/image";
import Link from "next/link";

export default function Logo() {

    const size = 50

    return (
        <Link href={"/"}>
            <div className={"flex items-center gap-4 text-xl font-light leading-tight"}>
                <Image width={size} height={size} sizes={"20 20"} src={"/images/logo/logo.png"} alt="logo"/>
                <span className={"text-gray-300 italic logo-font"}>BTPool</span>
            </div>
        </Link>

    )
}
