export interface IFilters {
	label: string;
	items: string[];
}

export default interface IProjects {
	name: string;
	category: string; //backend, frontend, etc
	type: string; // erp, bot, etc
	description: string;
	picture: string;
	technologies: string[]; //filter items
	repo?: string;
	live?: string;
	featured?: boolean;
	docs?: string;
}
