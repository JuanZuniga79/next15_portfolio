import ITestimonial from "../types/ITestimonial";
import igdIcon from "../assets/images/IGDIcon.png"

const en: ITestimonial[] = [
    {image: igdIcon, name: "IGD S.A.S", subtitle: "Software Company", type: "image",
        description: "One of the most talented developers we've worked with. Their ability to quickly understand complex problems and deliver elegant solutions consistently impressed our entire team."},
    {image: igdIcon, name: "Yefferson Ruzon", subtitle: "UX/UI Designer and Front-End Developer", type: "image",
        description: "A truly exceptional colleague who brought both technical expertise and creative thinking to every project."}
];

const es: ITestimonial[] = [
    {image: igdIcon, name: "IGD S.A.S", subtitle: "Compañía de Software", type: "image",
        description: "Uno de los desarrolladores más talentosos con los que hemos trabajado. Su capacidad para comprender rápidamente problemas complejos y entregar soluciones elegantes con regularidad impresionó a nuestro equipo entero."},
    {image: igdIcon, name: "Yefferson Ruzon", subtitle: "Diseñador UX/UI y Desarrollador Front-End", type: "image",
        description: "Una verdadera excelencia en el trabajo en equipo que aportó tanto conocimiento técnico como pensamiento creativo a cada proyecto."}
]

const getTestimonials = async (locale: string) => locale === 'en' ? en : es;
export default getTestimonials;