import { ReactNode } from "react";

interface Props {
	title: string;
	id?: string;
	subtitle?: string;
	children?: ReactNode;
}
export default function SectionContainer({
	id,
	title,
	subtitle,
	children,
}: Props) {
	return (
		<section id={id} className="flex flex-col gap-y-12 w-full overflow-hidden">
			<div className="flex flex-col gap-y-4 items-center">
				<h3 className="font-mono font-bold text-base rounded-full px-4 border-[1px] border-text/60 dark:border-dark-text/60">
					{title}
				</h3>
				<h4 className="font-sans text-sm text-center font-light">{subtitle}</h4>
			</div>
			{children}
		</section>
	);
}
