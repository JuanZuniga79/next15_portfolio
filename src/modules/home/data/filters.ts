import { IFilters } from "../types/IProjects";

const filters: IFilters[] = [
	{
		label: "language",
		items: [
			"c#",
			"java",
			"kotlin",
			"python",
			"javascript",
			"typescript",
			"go",
			"rust",
			"lua",
			"bash",
			"zsh",
			"zig",
			"c",
			"c++",
			"others",
		],
	},
	{ label: "framework", items: [] },
];

export default filters;
