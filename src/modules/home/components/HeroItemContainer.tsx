import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
	right?: boolean;
}
export default function HeroItemContainer({ title, children, right }: Props) {
	return (
		<div
			className={`py-2 flex flex-col gap-y-5 ${right && "xl:items-end"} w-full`}
		>
			<h3 className="font-mono font-semibold text-xl text-center text-text dark:text-dark-text capitalize">
				{title}
			</h3>
			<div className="px-4 text-subtext-1 dark:text-dark-subtext-1 font-sans">
				{children}
			</div>
		</div>
	);
}

