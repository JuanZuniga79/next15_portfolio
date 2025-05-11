import HeroItemContainer from "@/modules/home/components/HeroItemContainer";
import HeroContactListItem from "@/modules/home/components/HeroContactListItem";
import LocationIcon from "@/core/assets/icons/LocationIcon";
import MailIcon from "@/core/assets/icons/MailIcon";
import GitIcon from "@/core/assets/icons/GitIcon";
import LinkedinIcon from "@/core/assets/icons/LinkedinIcon";
import professionalInfo from "@/modules/home/data/professionalInfo";
import { getTranslations } from "next-intl/server";

export default async function LeftHero() {
	const t = await getTranslations("Home");

	return (
		<section className="flex flex-col gap-y-4 sm:gap-y-8 lg:gap-y-2 items-start justify-center w-full">
			<HeroItemContainer title={t("contact")}>
				<ul className="flex flex-col gap-y-2 sm:gap-y-4 lg:gap-y-1 items-center lg:items-start">
					<HeroContactListItem
						Icon={<LocationIcon />}
						content="Santa Marta, Colombia"
					/>
					<HeroContactListItem
						Icon={<MailIcon />}
						link="mailto:wk.juanzuniga@gmail.com"
						content="wk.juanzuniga@gmail.com"
					/>
					<HeroContactListItem
						Icon={<GitIcon />}
						link="https://github.com/JuanZuniga79"
						content="JuanZuniga79"
					/>
					<HeroContactListItem
						Icon={<LinkedinIcon />}
						link="https://www.linkedin.com/in/juanzuniga79/"
						content="/in/JuanZuniga79"
					/>
				</ul>
			</HeroItemContainer>
			<HeroItemContainer title={t("info")}>
				<ul
					className="flex items-center justify-around flex-wrap gap-x-3 pt-2 lg:pt-0 gap-y-5 lg:gap-y-2
          text-sm sm:text-base lg:text-sm"
				>
					{professionalInfo.map((item, i) => (
						<li key={i} className="flex flex-col items-center">
							<p className="font-sans">
								{item.key !== "bc" && "+"}
								{item.value}{" "}
								{(item.key === "experience" || item.key === "programming") &&
									t("years")}
							</p>
							<p className="font-mono font-bold text-subtext-1 dark:text-dark-subtext-1">
								{t(item.key)}
							</p>
						</li>
					))}
				</ul>
			</HeroItemContainer>
		</section>
	);
}
