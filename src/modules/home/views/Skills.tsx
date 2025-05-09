import { getTranslations } from "next-intl/server";
import SectionContainer from "../components/SectionContainer";
import SkillsContainer from "../components/SkillsContainer";
import { Suspense } from "react";

export default async function Skills() {
	const t = await getTranslations("Skills");
	return (
		<SectionContainer id="skills" title={t("title")} subtitle={t("subtitle")}>
			<Suspense fallback={<div>Loading...</div>}>
				<SkillsContainer />
			</Suspense>
		</SectionContainer>
	);
}
