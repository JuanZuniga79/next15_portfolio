import SectionContainer from "@/modules/home/components/SectionContainer";
import {getTranslations} from "next-intl/server";
import getServices from "@/modules/home/data/services";
import IService from "@/modules/home/types/IService";
import {Link} from "@/i18n/navigation";

interface Props{
    locale: string
}
export default async function Services({locale}: Props){

    const t = await getTranslations('Services');
    const data = await getServices(locale);

    return(
        <SectionContainer title={t('title')} subtitle={t('subtitle')}>
            <ul className="grid grid-cols-4 gap-5">
                {data.map((item: IService, i) => (
                    <li key={i} className="border-[1px] border-crust rounded-xl hover:shadow-sm shadow-crust
                        dark:shadow-crust/60
                        transition-all duration-100 cursor-default flex flex-col justify-between dark:border-crust/40">
                        <div className="p-4 flex flex-col items-start gap-y-4">
                            <div className="flex items-center justify-start gap-x-5 w-full">
                                <div className="text-dark-mantle dark:text-mantle bg-crust dark:bg-dark-crust
                                    flex items-center justify-center rounded-xl p-1.5">
                                    <figure className="w-6 h-6">
                                        <item.icon/>
                                    </figure>
                                </div>
                                <h5 className="font-mono font-semibold text-lg">{item.title}</h5>
                            </div>
                            <p className="text-sm font-sans">{item.description}</p>
                        </div>
                        <Link href="/about/#services"
                              className="py-4 px-8 border-t border-crust text-sm capitalize font-mono flex items-center
                                gap-x-2 hover:gap-x-4 transition-all duration-100 cursor-pointer justify-start
                                dark:border-crust/60">
                            <span>{t('know')}</span>
                            <span>{"->"}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </SectionContainer>
    )
}