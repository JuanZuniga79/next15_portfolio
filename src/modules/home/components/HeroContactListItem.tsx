import { ReactNode } from "react";
import Link from "next/link";
import LinkIcon from "@/core/assets/icons/LinkIcon";

interface Props {
	Icon: ReactNode;
	content: string;
	link?: string;
}
export default function HeroContactListItem({ Icon, content, link }: Props) {
	return (
		<li
			className="flex items-center gap-x-2 sm:gap-x-3 text-text dark:text-dark-text 
      text-sm sm:text-base lg:text-sm font-sans 2xl:text-base"
		>
			<figure className="w-4 h-4 sm:w-6 sm:h-6">{Icon}</figure>
			{link ? (
				<Link
					href={link}
					target="_blank"
					className="flex items-center gap-x-2 hover:underline"
				>
					{content}{" "}
					<figure className="w-4 h-4 sm:w-6 sm:h-6">
						<LinkIcon />{" "}
					</figure>
				</Link>
			) : (
				<span className="text-subtext-0 dark:text-dark-subtext-0">
					{content}
				</span>
			)}
		</li>
	);
}
