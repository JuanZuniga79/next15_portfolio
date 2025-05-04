import { IEducationTimeline } from "../types/ITimeline";

const en: IEducationTimeline[] = [
    {title: "Systems engineering | Universidad Del Magdalena", location: "Colombia, Santa Marta", start: new Date(2019, 8, 1), end: new Date(), type: "Degree"},
    {title: "Back-end Oracle Next Education | Alura ONE", location: "On Line", start: new Date(2023, 4, 1), end: new Date(2024, 10, 2), type: "Bootcamp"},
    {title: ".Net Full Stack Foundation | Board Infinity", location: "On Line", start: new Date(2024, 2, 1), end: new Date(2024, 4, 9), type: "Course"},
    {title: "Introduction to Android Mobile Application Development | Meta", location: "On Line", start: new Date(2023, 10, 1), end: new Date(2024, 2, 29), type: "Course"},
    {title: "Version Control | Meta", location: "On Line", start: new Date(2024, 9, 1), end: new Date(2024, 11, 5), type: "Course"},
]

const es: IEducationTimeline[] = [
    {title: "Ingenieria de Sistemas | Universidad Del Magdalena", location: "Colombia, Santa Marta", start: new Date(2019, 8, 1), end: new Date(), type: "Pregrado"},
    {title: "Back-end Bootcamp | Oracle Next Education", location: "En Linea", start: new Date(2023, 4, 1), end: new Date(2024, 10, 2), type: "Bootcamp"},
    {title: ".Net Full Stack Foundation | Board Infinity", location: "En Linea", start: new Date(2024, 2, 1), end: new Date(2024, 4, 9), type: "Curso"}
]

const getEducation = async (lang: string): Promise<IEducationTimeline[]> => {
    if (lang === "en") return en.sort((a, b) => a.start.getTime() - b.start.getTime()).reverse();
    return es.sort((a, b) => a.start.getTime() - b.start.getTime()).reverse();
}

export default getEducation;