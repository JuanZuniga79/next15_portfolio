﻿import getNavItems from "@/core/data/navData";
import "@/core/styles/nav.css";
import { headers } from "next/headers";
import Link from "../components/Link";

interface Props {
	lang: string;
}
export default async function Nav({ lang }: Props) {
	const data = await getNavItems(lang);

	const headersList = await headers();
	const fullUrl = headersList.get("x-url") || "";
	const pathname = fullUrl ? new URL(fullUrl).pathname : "/";

	return (
		<nav
			className="text-text dark:text-dark-text col-span-2 justify-self-center hidden md:flex
      items-center justify-center"
		>
			<ul className="flex items-center gap-x-2">
				{data.map((item, i) => (
					<li
						key={i}
						className={`navItem relative capitalize font-mono px-3 md:text-lg
                        ${pathname === item.href && "active text-text dark:text-dark-text"} transition-colors 
                        focus-visible:outline-none duration-300 font-semibold text-base`}
					>
						<Link id={item.href} label={item.label} />
					</li>
				))}
			</ul>
		</nav>
	);
}
