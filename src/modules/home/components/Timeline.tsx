import { JSX } from "react";
import ITimeline from "../types/ITimeline";
import FrontendIcon from "../assets/icons/FrontendIcon";
import { getTranslations } from "next-intl/server";
import { getDate } from "@/core/utils/dateUtils";
import AchievementIcon from "../assets/icons/AchievementIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import PowerIcon from "../assets/icons/PowerIcon";
import { differenceInDays } from "date-fns";

interface Props {
	children?: React.ReactNode;
	title: string;
	icon: JSX.Element;
}
export default function TimelineContainer({ children, title, icon }: Props) {
	return (
		<div className="grid grid-cols-1 gap-y-5 w-full">
			<div className="w-full flex items-center gap-x-3">
				<div className="p-2 flex items-center justify-center bg-crust dark:bg-dark-crust rounded-2xl">
					<figure className="w-4 h-4 2xl:w-6 2xl:h-6">{icon}</figure>
				</div>
				<h4 className="font-serif text-lg 2xl:text-2xl font-bold">{title}</h4>
			</div>
			{children}
		</div>
	);
}

export function Timeline({ children }: { children: React.ReactNode }) {
	return (
		<ul className="flex flex-col items-start gap-y-2 overflow-hidden w-full">
			{children}
		</ul>
	);
}

interface IItemProps {
	item: ITimeline;
	icon: JSX.Element;
	type?: string;
	listTitle?: string;
	children?: React.ReactNode;
}
export async function TimelineItem({
	item,
	icon,
	type,
	listTitle,
	children,
}: IItemProps) {
	const t = await getTranslations("Config");

	const start = getDate(item.start);
	const end = getDate(item.end);

	return (
		<li className="flex items-start justify-start gap-x-3 group w-full cursor-default h-fit py-2 px-2">
			<div className="xl:flex flex-col items-center h-[150%] mt-1.5 z-10 bg-primary dark:bg-dark-primary hidden">
				<figure
					className="w-4 min-h-4 border-[1px] border-text/60 rounded-full group-hover:bg-text/80
                    dark:border-dark-text/60 dark:group-hover:bg-dark-text/80
                    transition-colors duration-300 ease-in-out"
				/>
				<figure
					className="w-[2px] h-full bg-text/30 group-hover:bg-text/60 dark:bg-dark-text/40
                    dark:group-hover:bg-dark-text/60 -z-10"
				/>
			</div>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-0.5 w-fit">
					<div className="flex items-center gap-x-1">
						<figure className="min-w-5 min-h-5">{icon}</figure>
						<h5 className="font-mono capitalize text-sm sm:text-lg font-semibold text-wrap">
							{item.title}
						</h5>
					</div>
					<div
						className="flex items-center gap-x-3 gap-y-1 pl-5 text-xs flex-wrap font-light font-sans 
            w-full sm:text-sm"
					>
						<div className="flex items-center gap-x-1">
							<figure className="w-5 h-5">
								<FrontendIcon />
							</figure>
							<span>{item.location}</span>
						</div>
						|
						<div className="flex items-center gap-x-2">
							<figure className="w-5 h-5">
								<CalendarIcon />
							</figure>
							<div className="flex items-center gap-x-2">
								<p className="flex items-center gap-x-0.5">
									<span>{t(start[0].toString())}</span>/
									<span>{start[1].toString()}</span>
								</p>
								-
								<p className="flex items-center gap-x-0.5">
									{item.end ? (
										differenceInDays(item.end, new Date()) === 0 ? (
											t("paused")
										) : (
											<>
												<span>{t(end[0].toString())}</span>/
												<span>{end[1].toString()}</span>
											</>
										)
									) : (
										t("present")
									)}
								</p>
							</div>
						</div>
						{type && (
							<>
								|
								<div className="flex items-center gap-x-2">
									<figure className="w-5 h-5">
										<PowerIcon />
									</figure>
									<span>{type}</span>
								</div>
							</>
						)}
					</div>
				</div>
				{children && (
					<div
						className="pb-4 pt-2 px-2 text-text dark:text-dark-text flex flex-col gap-y-2 border-[1px] 
                        border-text/40 dark:border-dark-text/40 rounded-2xl"
					>
						<div className="flex items-center gap-x-1 px-3">
							<figure className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7">
								<AchievementIcon />
							</figure>
							<span className="font-serif text-sm sm:text-lg font-semibold place-self-end">
								{listTitle && listTitle}
							</span>
						</div>
						<ul className="flex flex-col gap-y-1 pl-[24px] text-xs sm:text-sm">
							{children}
						</ul>
					</div>
				)}
			</div>
		</li>
	);
}
