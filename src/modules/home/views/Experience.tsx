import SectionContainer from "@/modules/home/components/SectionContainer";
import { getTranslations } from "next-intl/server";
import TimelineContainer, {
	Timeline,
	TimelineItem,
} from "../components/Timeline";
import WorkIcon from "../assets/icons/WorkIcon";
import getExperience from "../data/experience";
import PCIcon from "../assets/icons/PCIcon";
import getEducation from "../data/education";
import EducationIcon from "../assets/icons/EducationIcon";

interface Props {
	locale: string;
}
export default async function EducationNExperience({ locale }: Props) {
	const e = await getTranslations("ExperienceNEducation");
	const experience = await getExperience(locale);
	const education = await getEducation(locale);

	return (
		<SectionContainer title={e("title")} subtitle={e("subtitle")}>
			<div className="grid 2xl:grid-cols-2 gap-5 items-baseline">
				<TimelineContainer title={e("work")} icon={<WorkIcon />}>
					<Timeline>
						{experience.map((item, index) => (
							<TimelineItem
								key={index}
								item={item}
								icon={<PCIcon />}
								listTitle={e("achievement")}
							>
								{item.keyAchievements.map((item, i) => (
									<li key={i} className="gap-x-4 flex items-baseline">
										<figure
											className="min-w-1 h-1 rounded-full bg-text
                                            dark:bg-dark-text"
										/>
										<span className="font-sans">{item}</span>
									</li>
								))}
							</TimelineItem>
						))}
					</Timeline>
				</TimelineContainer>
				<TimelineContainer title={e("education")} icon={<WorkIcon />}>
					<Timeline>
						{education.map((item, index) => (
							<TimelineItem
								key={index}
								item={item}
								icon={<EducationIcon />}
								type={item.type}
							/>
						))}
					</Timeline>
				</TimelineContainer>
			</div>
		</SectionContainer>
	);
}

