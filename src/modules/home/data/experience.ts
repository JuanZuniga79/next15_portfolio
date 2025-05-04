import { start } from "repl";
import { IExperienceTimeline } from "../types/ITimeline";

const en: IExperienceTimeline[] = [
    {
        title: "Semi Senior Full Stack Developer | IGD S.A.S", location: "Remote, Barranquilla",
        start: new Date(2021, 1, 1), end: new Date(2025, 3, 1),
        keyAchievements: [
            "Led the development of the company’s flagship frontend project (Angular/React), implementing architectural improvements that boosted team efficiency by 15% and reduced development cycles.",
            "Modernized legacy systems by migrating to React 19 and Next.js 15 (TypeScript), cutting technical debt by 35% and improving maintainability. In addition to achieving a 40% faster response times and enhanced security.",
            "Developed high-performance APIs using Spring Boot and ASP.NET Core, optimizing database queries and caching to handle 20% more concurrent users.",
            "Deployed and managed cloud solutions on Microsoft Azure and AWS.",
            "Mentored junior developers in full-stack best practices (Angular, React, .NET, Spring Boot).",
            "Implemented Agile/Scrum methodologies, helping improve delivery timelines through sprint planning and retrospectives."
        ]
    }
]

const es: IExperienceTimeline[] = [
    {
        title: "Desarrollador Full Stack Semi Senior | IGD S.A.S", 
        location: "Remoto, Barranquilla",
        start: new Date(2021, 1, 1), 
        end: new Date(2025, 3, 1),
        keyAchievements: [
            "Lideré el desarrollo del proyecto frontend principal de la empresa (Angular/React), implementando mejoras arquitectónicas que aumentaron la eficiencia del equipo en un 15% y redujeron los ciclos de desarrollo.",
            "Modernicé sistemas heredados mediante la migración a React 19 y Next.js 15 (TypeScript), reduciendo la deuda técnica en un 35% y mejorando la mantenibilidad. Además, logré tiempos de respuesta 40% más rápidos y mayor seguridad.",
            "Desarrollé APIs de alto rendimiento usando Spring Boot y ASP.NET Core, optimizando consultas a la base de datos y caché para manejar un 20% más de usuarios concurrentes.",
            "Implementé y gestioné soluciones en la nube usando Microsoft Azure y AWS.",
            "Capacité a desarrolladores junior en mejores prácticas full-stack (Angular, React, .NET, Spring Boot).",
            "Implementé metodologías Ágiles/Scrum, contribuyendo a mejorar los tiempos de entrega mediante planificación de sprints y retrospectivas."
        ]
    }
]

const getExperience = async (lang: string): Promise<IExperienceTimeline[]> => {
    if (lang === "en") {
        return en.sort((a, b) => a.start.getTime() - b.start.getTime()).reverse();
    }
    return es.sort((a, b) => a.start.getTime() - b.start.getTime()).reverse();
}

export default getExperience;