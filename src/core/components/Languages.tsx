import LangIcon from "@/core/assets/icons/LangIcon";
import {Link} from "@/i18n/navigation";
import {headers} from "next/headers";

interface Props{
    lang: string
}
export default async function Languages({lang}: Props) {

    const headersList = await headers();
    const fullUrl = headersList.get('x-url') || '';
    const pathname = fullUrl ? new URL(fullUrl).pathname : '/';

    return(
        <Link locale={lang === "en" ? "es" : "en"} href={pathname}
              className="rounded-full text-text/80 cursor-pointer dark:text-dark-text p-0.5 bg-crust
                hover:bg-sky hover:text-dark-text dark:bg-dark-mantle dark:hover:text-text
                dark:hover:bg-dark-red
                transition-all duration-200 ease-in-out">
            <figure className="w-7 h-7">
                <LangIcon/>
            </figure>
        </Link>
    )
}