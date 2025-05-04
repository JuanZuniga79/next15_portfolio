import {INav} from "@/core/types/INav";

const home = ""
const skills = "skills"
const projects = "projects"

const en: INav[] = [
    {label: "home", href: home},
    {label: "skills", href: skills},
    {label: "projects", href: projects},
]

const es: INav[] = [
    {label: "inicio", href: home},
    {label: "habilidades", href: skills},
    {label: "proyectos", href: projects}
]

export default async function getNavItems(lang: string){
    return lang === "en" ? en : es;
}