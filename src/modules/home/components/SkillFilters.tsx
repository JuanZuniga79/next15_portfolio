"use client";
import skills from "../data/skills";

interface Props {
	active: string;
	changeFilter: (value: string) => void;
}
export default function SkillFilters({ changeFilter, active }: Props) {
	return (
		<ul
			className="flex items-center gap-2 xl:gap-x-4 self-center flex-wrap justify-center
            w-full px-2 xl:px-6 xl:py-4 pb-3 bg-primary dark:bg-dark-primary"
		>
			{skills.map((category, i) => (
				<li key={i} onClick={() => changeFilter(category.category)}>
					<span
						className={`capitalize hover:text-blue dark:hover:text-dark-red cursor-pointer text-sm 
                        2xl:text-lg sm:text-base
                        font-mono font-semibold px-2 ${active === category.category && "text-blue dark:text-dark-red"}`}
					>
						{category.category}
					</span>
				</li>
			))}
		</ul>
	);
}
