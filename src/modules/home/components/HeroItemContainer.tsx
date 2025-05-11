import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
	right?: boolean;
}
export default function HeroItemContainer({ title, children, right }: Props) {
	return (
		<div
			className={`py-2 flex flex-col gap-y-5 ${right && "lg:items-end"} w-full`}
		>
			<h3
				className={`font-mono font-semibold text-xl sm:text-2xl text-center 
        text-text dark:text-dark-text capitalize ${right ? "lg:text-right" : "lg:text-start"}`}
			>
				{title}
			</h3>
			<div className="text-subtext-1 dark:text-dark-subtext-1 font-sans">
				{children}
			</div>
		</div>
	);
}
