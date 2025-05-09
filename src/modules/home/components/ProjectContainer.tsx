"use client";
import { useEffect, useMemo, useState } from "react";
import filters from "../data/filters";
import Combobox from "@/core/components/Combobox";
import getProjects from "../data/projects";
import Image from "next/image";
import Link from "next/link";
import { Eye, FileJson } from "lucide-react";
import IProjects from "../types/IProjects";
import { debounce } from "lodash";

interface Props {
	locale: string;
}
export default function ProjectContainer({ locale }: Props) {
	const [activeFilters, setActiveFilters] = useState<string[]>([]);
	const [data, setData] = useState<IProjects[]>([]);

	const debouncedProjects = useMemo(
		() =>
			debounce((locale: string, filters: string[]) => {
				const newData = getProjects(locale, filters);
				setData(newData);
			}, 100),
		[],
	);

	useEffect(() => {
		debouncedProjects(locale, activeFilters);
		return () => debouncedProjects.cancel();
	}, [activeFilters]);

	return (
		<div className="flex flex-col gap-y-5">
			<ul
				className={`w-full rounded-xl bg-transparent transition-all duration-100 ease-in-out h-fit
                    grid grid-cols-6 gap-5 overflow-hidden px-2`}
			>
				{filters.map((filter, index) => (
					<li key={index} className="w-full h-fit">
						<Combobox
							values={activeFilters}
							content={filter.items}
							title={filter.label}
							onChange={(items) => {
								setActiveFilters(items);
							}}
						/>
					</li>
				))}
			</ul>
			<ul className="grid grid-cols-4 gap-5">
				{data.map((project, i) => (
					<li
						key={i}
						className="border-[1px] border-text/60 dark:border-dark-text/60 rounded-lg overflow-hidden flex flex-col gap-y-4 pb-1.5 relative"
					>
						<figure className="bg-blue dark:bg-dark-red px-3 absolute text-dark-text dark:text-text top-2 right-2">
							<span>Featured</span>
						</figure>
						<Image
							src={project.picture}
							alt={`${project.name} picture`}
							width={500}
							height={500}
							className="w-full h-[200px] min-h-[200px]"
						/>
						<div className="flex flex-col px-4 justify-between h-full">
							<h4 className="font-mono text-lg">{project.name}</h4>
							<p className="font-sans text-base first-letter:capitalize font-light">
								{project.description}
							</p>
							<ul className="flex items-center gap-2 justify-start flex-wrap pt-3">
								{project.technologies.map((tech, i) => (
									<li
										key={i}
										className="px-2 font-mono text-sm capitalize bg-blue text-dark-text dark:bg-dark-red rounded-md"
									>
										{tech}
									</li>
								))}
							</ul>
							<div className="flex items-center justify-between gap-x-2 mt-2">
								<span className="font-mono text-sm capitalize font-light">
									{project.type}
								</span>
								<div className="flex items-center gap-x-1">
									{project.repo && (
										<Link href={project.repo}>
											<FileJson size={20} />
										</Link>
									)}
									{project.live && (
										<Link href={project.live} target="_blank">
											<Eye size={20} />
										</Link>
									)}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
