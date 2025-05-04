import light from "@/core/assets/svg/light-theme-icon.svg"
import dark from "@/core/assets/svg/dark-theme-icon.svg"
import Image from "next/image";
import {getTranslations} from "next-intl/server";
import Nav from "@/core/views/Nav";
import Themes from "@/core/components/Themes";
import Languages from "@/core/components/Languages";

export default async function Header() {
    const c = await getTranslations("Config")
    return(
        <header className="w-full h-20 border-b-crust border-b-[1px] flex items-center justify-center
            dark:border-b-dark-crust fixed top-0 left-0 backdrop-blur-sm z-20">
            <div className="w-[80%] grid grid-cols-4 items-center">
                <div className="flex items-center gap-x-2 justify-self-start">
                    <figure className="w-[32px] h-[46px] scale-90">
                        <Image src={light} alt="page Icon" className="dark:hidden"/>
                        <Image src={dark} alt="page Icon" className="hidden dark:flex"/>
                    </figure>
                </div>
                <Nav lang={c("lang")}/>
                <div className="flex items-center gap-x-4 justify-self-end">
                    <Themes />
                    <Languages lang={c("lang")}/>
                </div>
            </div>
        </header>
    )
}