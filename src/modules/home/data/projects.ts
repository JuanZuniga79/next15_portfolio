import IProjects from "../types/IProjects";

const en: string[] = ["project focused on productivity and comfort when code"];

const es: string[] = [
	"proyecto enfocado en la productividad y la comodidad a la hora de escribir codigo",
];

const getProjects = (locale: string, filters: string[]) => {
	console.log(filters);
	const items: IProjects[] = [
		{
			name: "NeoVim Custiomization",
			category: "Terminal",
			type: "IDE",
			picture:
				"https://raw.githubusercontent.com/JuanZuniga79/nvim/refs/heads/main/screenshots/2025-05-07_21-47.png",
			technologies: ["lua"],
			description: locale === "en" ? en[0] : es[0],
			repo: "https://github.com/JuanZuniga79/nvim",
		},
		{
			name: `Astro 5 ${locale === "en" ? "Portfolio" : "Portafolio"}`,
			category: "Portfolio",
			description: "",
			picture:
				"https://raw.githubusercontent.com/JuanZuniga79/projects-docs/refs/heads/main/astro5_portfolio/2025-05-09_10-54.png",
			type: "Web Page",
			technologies: [
				"reactjs",
				"tailwindcss",
				"astrojs",
				"typescript",
				"shadcn",
				"css",
			],
			repo: "https://github.com/JuanZuniga79/portfolio",
			live: "https://juanzuniga.vercel.app/en/",
		},
	];
	if (filters.length === 0) return items;
	return items.filter((item) =>
		item.technologies.some((tech) => filters.some((filter) => filter === tech)),
	);
};

export default getProjects;
