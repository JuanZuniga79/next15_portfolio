import {INav} from "@/core/types/INav";

const about = "/about/"
const projects = "/projects/"

const en: INav[] = [
    {label: "home", href: "/"},
    {label: "about me", href: about},
    {label: "projects", href: projects},
]

const es: INav[] = [
    {label: "inicio", href: "/"},
    {label: "sobre mi", href: about},
    {label: "proyectos", href: projects}
]

export default async function getNavItems(lang: string){
    return lang === "en" ? en : es;
}