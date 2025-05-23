﻿import HeroItemContainer from "@/modules/home/components/HeroItemContainer";
import outstandingSkills from "@/core/data/outstandingSkills";

interface Props {
	skill: string;
}
export default function RightHero({ skill }: Props) {
	return (
		<section className="flex flex-col gap-y-4 sm:gap-y-10 items-center justify-center">
			<HeroItemContainer title={skill} right>
				<ul className="flex items-center justify-around lg:justify-end gap-x-1 gap-y-2 flex-wrap">
					{outstandingSkills.map((item, i) => (
						<li
							key={i}
							className="px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-sky dark:bg-dark-red text-dark-text text-xs
                        dark:text-text text-nowrap font-sans font-semibold sm:text-base lg:text-xs
                        2xl:text-base"
						>
							{item}
						</li>
					))}
				</ul>
			</HeroItemContainer>
		</section>
	);
}
