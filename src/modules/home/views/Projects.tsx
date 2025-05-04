import { getTranslations } from "next-intl/server";
import SectionContainer from "../components/SectionContainer"
import ProjectContainer from "../components/ProjectContainer";
import { Suspense } from "react";

interface Props{
    locale: string
}
export default async function Projects({locale}: Props){

    const t = await getTranslations("Projects");

    return(
        <SectionContainer id="projects" title={t('title')} subtitle={t('subtitle')}>
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectContainer locale={locale} />
            </Suspense>
        </SectionContainer>
    )
}