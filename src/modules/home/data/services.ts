import IService from "@/modules/home/types/IService";
import BackendIcon from "@/modules/home/assets/icons/BackendIcon";
import FrontendIcon from "@/modules/home/assets/icons/FrontendIcon";
import MobileIcon from "@/modules/home/assets/icons/MobileIcon";
import DesktopIcon from "@/modules/home/assets/icons/DesktopIcon";
import SQLIcon from "@/modules/home/assets/icons/SQLIcon";
import CloudIcon from "../assets/icons/CloudIcon";

const en: IService[] = [
  {
    icon: BackendIcon,
    title: "Backend Development",
    description:
      "Specializing in the development of reliable, scalable server-side applications and efficient APIs using microservices architecture, cloud-native technologies, and industry best practices.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Architecture & Design",
    description: 
      "Expertise in designing and implementing cloud architectures, optimizing performance, scalability, and security for modern applications."
  },
  {
    icon: SQLIcon,
    title: "SQL Design & Development",
    description:
      "Expertise in architecting and implementing relational (SQL) and non-relational (NoSQL) databases—ensuring data integrity, scalability, and high availability for modern applications.",
  },
  {
    icon: FrontendIcon,
    title: "Frontend Development",
    description:
      "Crafting responsive, dynamic user interfaces using modern frameworks, guided by best practices to meet all your business requirements.",
  },
  {
    icon: MobileIcon,
    title: "Mobile Development",
    description:
      "Building scalable, intuitive mobile apps using modern frameworks like React Native, Flutter, MAUI and Kotlin, with a focus on performance, UX design, and cross-platform consistency.",
  },
  {
    icon: DesktopIcon,
    title: "Multiplatform Development",
    description:
      "Delivering responsive, cross-platform applications for desktop and mobile using frameworks like Flutter, React Native, Tauri, Kotlin and MAUI efficiency, scalability, and a unified user experience.",
  },
];

const es: IService[] = [
  {
    icon: BackendIcon,
    title: "Desarrollo Backend",
    description:
      "Especializado en el desarrollo de aplicaciones del lado del servidor confiables y escalables, y APIs eficientes utilizando arquitectura de microservicios, tecnologías cloud-native y las mejores prácticas de la industria.",
  },
  {
    icon: CloudIcon,
    title: "Arquitectura y Diseño en la Nube",
    description:
      "Experiencia en el diseño e implementación de arquitecturas en la nube, optimizando el rendimiento, la escalabilidad y la seguridad para aplicaciones modernas."
  },
  {
    icon: SQLIcon,
    title: "Diseño y Desarrollo SQL",
    description:
      "Experiencia en arquitectura e implementación de bases de datos relacionales (SQL) y no relacionales (NoSQL), asegurando integridad de datos, escalabilidad y alta disponibilidad para aplicaciones modernas.",
  },
  {
    icon: FrontendIcon,
    title: "Desarrollo Frontend",
    description:
      "Diseño de interfaces de usuario dinámicas y responsivas usando frameworks modernos, guiado por buenas prácticas para cumplir con todos los requisitos de tu negocio.",
  },
  {
    icon: MobileIcon,
    title: "Desarrollo Móvil",
    description:
      "Creación de aplicaciones móviles escalables e intuitivas con frameworks modernos como React Native, Flutter, MAUI y Kotlin, enfocado en el rendimiento, diseño UX y consistencia multiplataforma.",
  },
  {
    icon: DesktopIcon,
    title: "Desarrollo Multiplataforma",
    description:
      "Entrega de aplicaciones responsivas y multiplataforma para escritorio y móvil utilizando frameworks como Flutter, React Native, Tauri, Kotlin y MAUI, combinando eficiencia, escalabilidad y una experiencia de usuario unificada.",
  },
];

export default async function getServices(locale: string) {
  if (locale === "es") return es;
  return en;
}
