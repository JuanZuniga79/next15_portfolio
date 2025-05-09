import IProjects from "../types/IProjects";

const en: string[] = ["this's a test description"];

const es: string[] = ["esta es una descripcion de prueba"];

const getProjects = (locale: string, filters: string[]) => {
	const items: IProjects[] = [
		{
			name: "NeoVim Custiomization",
			category: "Terminal",
			type: "IDE",
			picture:
				"https://raw.githubusercontent.com/JuanZuniga79/nvim/refs/heads/main/screenshots/2025-05-07_21-47.png",
			technologies: ["lua"],
			description: locale === "en" ? en[0] : es[0],
		},
	];
	if (filters.length === 0) return items;
	return items.filter((item) =>
		item.technologies.some((tech) => filters.some((filter) => filter === tech)),
	);
};

export default getProjects;
