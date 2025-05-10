import HeroItemContainer from "@/modules/home/components/HeroItemContainer";
import services from "@/core/data/services";
import outstandingSkills from "@/core/data/outstandingSkills";

interface Props {
	service: string;
	skill: string;
}
export default function RightHero({ service, skill }: Props) {
	return (
		<section className="flex flex-col gap-y-4 items-center justify-center">
			<HeroItemContainer title={service} right>
				<ul className="flex flex-col gap-y-0.5 items-center xl:items-end">
					{services.map((item, i) => (
						<li key={i} className="italic">
							{item}
						</li>
					))}
				</ul>
			</HeroItemContainer>
			<HeroItemContainer title={skill} right>
				<ul className="flex items-center justify-around gap-x-1 gap-y-2 flex-wrap">
					{outstandingSkills.map((item, i) => (
						<li
							key={i}
							className="px-3 py-0.5 rounded-full bg-sky dark:bg-dark-red text-dark-text text-xs
                        dark:text-text text-nowrap font-sans font-semibold"
						>
							{item}
						</li>
					))}
				</ul>
			</HeroItemContainer>
		</section>
	);
}

