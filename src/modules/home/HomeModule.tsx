import Hero from "@/modules/home/views/Hero";
import Services from "@/modules/home/views/Services";
import {getTranslations} from "next-intl/server";
import EducationNExperience from "@/modules/home/views/Experience";
import Skills from "./views/Skills";

export default async function HomeModule() {
    const t = await getTranslations("Config");
    return(
        <>
            <Hero/>
            <Services locale={t('lang')}/>
            <EducationNExperience locale={t('lang')}/>
            <Skills locale={t('lang')}/>
        </>
    )
}