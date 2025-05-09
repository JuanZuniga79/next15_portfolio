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
		<li className="flex items-center gap-x-2 text-text dark:text-dark-text">
			<figure className="w-6 h-6">{Icon}</figure>
			{link ? (
				<Link
					href={link}
					target="_blank"
					className="flex items-center gap-x-2 hover:underline"
				>
					{content} <LinkIcon />
				</Link>
			) : (
				<span className="font-sans text-lg text-subtext-0 dark:text-dark-subtext-0">
					{content}
				</span>
			)}
		</li>
	);
}
