import Hero from "@/modules/home/views/Hero";
import Services from "@/modules/home/views/Services";
import {getTranslations} from "next-intl/server";
import EducationNExperience from "@/modules/home/views/Experience";
import Skills from "./views/Skills";
import Testimonials from "./views/Testimonials";
import Projects from "./views/Projects";

export default async function HomeModule() {
    const t = await getTranslations("Config");
    const locale = t('lang');
    return(
        <>
            <Hero/>
            <Services locale={locale}/>
            <Testimonials locale={locale}/>
            <EducationNExperience locale={locale}/>
            <Skills locale={locale}/>
            <Projects locale={locale}/>
        </>
    )
}