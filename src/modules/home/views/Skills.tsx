import { getTranslations } from "next-intl/server";
import SectionContainer from "../components/SectionContainer";
import skills from "../data/skills";
import CalendarIcon from "../assets/icons/CalendarIcon";
import { Calendar, Clock, Pickaxe, Sparkles } from "lucide-react";
import PowerIcon from "../assets/icons/PowerIcon";
import { Link } from "@/i18n/navigation";
import SkillsContainer from "../components/SkillsContainer";
import { Suspense } from "react";

interface Props{
    locale: string
}
export default async function Skills({locale}: Props) {

    const t = await getTranslations("Skills")

    return(
        <SectionContainer id="skills" title={t('title')} subtitle={t('subtitle')}>
            <Suspense fallback={<div>Loading...</div>}>
                <SkillsContainer />
            </Suspense>
        </SectionContainer>
    )
}