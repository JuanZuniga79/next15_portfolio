import BackendIcon from "../assets/icons/BackendIcon";
import FrontendIcon from "../assets/icons/FrontendIcon";
import CodeIcon from "../assets/icons/CodeIcon";
import { ISkill } from "../types/ISkill";
//languages
import TypescriptIcon from "../assets/icons/skills/TypescriptIcon";
import JavaIcon from "../assets/icons/skills/JavaIcon";
import CSharpIcon from "../assets/icons/skills/CSharpIcon";
import PythonIcon from "../assets/icons/skills/PythonIcon";
import GoIcon from "../assets/icons/skills/GoIcon";
import KotlinIcon from "../assets/icons/skills/KotlinIcon";
import RustIcon from "../assets/icons/skills/RustIcon";
import CIcon from "../assets/icons/skills/CIcon";
import CppIcon from "../assets/icons/skills/CppIcon";
import SQLIcon from "../assets/icons/SQLIcon";
import ZigIcon from "../assets/icons/skills/ZigIcon";
import BashIcon from "../assets/icons/skills/BashIcon";
import MobileIcon from "../assets/icons/MobileIcon";
import DartIcon from "../assets/icons/skills/DartIcon";
//tools
import GitIcon from "../assets/icons/skills/GitIcon";
import DockerIcon from "../assets/icons/skills/DockerIcon";
import AzureIcon from "../assets/icons/skills/AzureIcon";
import GoogleCloudIcon from "../assets/icons/skills/GoogleCloudIcon";
import AWSIcon from "../assets/icons/skills/AWSIcon";

const skills: ISkill[] = [
    {category: "languages", skills: [
        {icon: TypescriptIcon, name: "typescript", experience: 4, subcategory: "general",
            frequency: "daily", level: "proficient", relatedSkills: ["javascript", "html", "css", "react", "astro", "angular", "node", "vue", "react native"]},
        {icon: CSharpIcon, name: "CSharp", experience: 4, subcategory: "fullstack",
            frequency: "weekly", level: "advanced", relatedSkills: ["html", "css", "blazor", "asp.net core", "MAUI", "unity", "entity framework"]},
        {icon: JavaIcon, name: "java", experience: 4, subcategory: "backend",
            frequency: "weekly", level: "advanced", relatedSkills: ["spring", "hibernate", "jpa", "gradle", "kotlin", "docker", "web flux"]},
        {icon: KotlinIcon, name: "kotlin", experience: 2, subcategory: "general",
            frequency: "weekly", level: "intermediate", relatedSkills: ["spring", "hibernate", "jpa", "gradle", "docker", "web flux"]},
        {icon: PythonIcon, name: "python", experience: 3, subcategory: "general",
            frequency: "weekly", level: "intermediate", relatedSkills: ["django", "fastapi", "reactPy", "numpy", "pygames"]},
        {icon: GoIcon, name: "go", experience: 1, subcategory: "backend",
            frequency: "monthly", level: "novice", relatedSkills: ["grpc", "protobuf", "docker", "kubernetes"]},
        {icon: RustIcon, name: "rust", experience: 0, subcategory: "general",
            frequency: "monthly", level: "beginner", relatedSkills: ["wasm", "linux", "unix", "rocket"]},
        {icon: CIcon, name: "c", experience: 0, subcategory: "SO",
            frequency: "monthly", level: "beginner", relatedSkills: ["linux", "unix"]},
        {icon: CppIcon, name: "c++", experience: 0, subcategory: "general",
            frequency: "monthly", level: "beginner", relatedSkills: ["linux", "unix", "video games"]},
        {icon: SQLIcon, name: "sql", experience: 4, subcategory: "database", frequency: "daily", level: "advanced",
            relatedSkills: ["mysql", "postgres", "mongo", "redis"]},
        {icon: ZigIcon, name: "zig", experience: 0, subcategory: "general", frequency: "monthly", level: "beginner",
            relatedSkills: ["linux", "unix"]},
        {icon: BashIcon, name: "bash", experience: 0.5, subcategory: "scripting", frequency: "weekly", level: "novice",
            relatedSkills: ["linux", "unix"]},
        {icon: DartIcon, name: "dart", experience: 1, subcategory: "general", frequency: "monthly", level: "intermediate",
            relatedSkills: ["flutter"]}
    ]},
    {category: "backend/frontend", skills: [
        {icon: TypescriptIcon, name: "nest", experience: 3, subcategory: "backend", frequency: "weekly", level: "advanced",
            relatedSkills: ["javascript", "docker", "node", "sql", "prisma"]},
        {icon: JavaIcon, name: "spring", experience: 4, subcategory: "backend", frequency: 'weekly', level: "advanced", 
            relatedSkills: ["jpa", "hibernate", "spring cloud", "spring security", "kotlin"]},
        {icon: TypescriptIcon, name: "express", experience: 1.5, subcategory: "backend", frequency: "monthly", level: "intermediate", 
            relatedSkills: ["mongose", "jose", "prisma", "docker", "sql"]},
        {icon: CSharpIcon, name: "asp", experience: 4, subcategory: "fullstack", frequency: "weekly", level: "advanced", 
            relatedSkills: ["entity framework", "automapper", "blazor", "razor pages"]},
        {icon: GoIcon, name: "fiber", experience: 1, subcategory: "backend", frequency: "monthly", level: "novice", 
            relatedSkills: ["gorm"]},
        {icon: TypescriptIcon, name: "react", experience: 4, subcategory: "frontend", frequency: "weekly", level: "proficient", 
            relatedSkills: ["react router dom", "tailwindcss", "css", "shad/cn", "nextjs", "astrojs", "zustand"]},
        {icon: TypescriptIcon, name: "next", experience: 4, subcategory: "fullstack", frequency: "weekly", level: "proficient", 
            relatedSkills: ["react", "tailwindcss", "shadcn", "css", "next-intl", "prisma", "zustand"]},
        {icon: TypescriptIcon, name: "angular", experience: 3, subcategory: "frontend", frequency: "weekly", level: "advanced", 
            relatedSkills: ["primeng", "zustand", "ngrx/state"]},
        {icon: CSharpIcon, name: "blazor", experience: 1, subcategory: "frontend", frequency: "monthly", level: "intermediate", relatedSkills: []},
        {icon: TypescriptIcon, name: "astro", experience: 3, subcategory: "frontend", frequency: "weekly", level: "proficient", 
            relatedSkills: ["nano store", "tailwindcss", "react", "preact"]}
    ]},
    {category: "mobile/desktop", skills: [
        {icon: TypescriptIcon, name: "react native", experience: 3, subcategory: "mobile", frequency: "weekly", level: "advanced", relatedSkills: []},
        {icon: CSharpIcon, name: "maui", experience: 1, subcategory: "mobile", frequency: "weekly", level: "novice", relatedSkills: []},
        {icon: DartIcon, name: "flutter", experience: 1, subcategory: "mobile", frequency: "weekly", level: "intermediate", relatedSkills: []},
        {icon: KotlinIcon, name: "kotlin multiplatform", experience: 0, subcategory: "mobile", frequency: "monthly", level: "beginner", relatedSkills: []},
        {icon: KotlinIcon, name: "android studio", experience: 0, subcategory: "mobile", frequency: "monthly", level: "beginner", relatedSkills: []},
        {icon: RustIcon, name: "tauri", experience: 0, subcategory: "desktop", frequency: "monthly", level: "beginner", relatedSkills: []},
        {icon: GoIcon, name: "Wails", experience: 0, subcategory: "desktop", frequency: "monthly", level: "novice", relatedSkills: []},
    ]},
    {category: "tools", skills: [
        {icon: GitIcon, name: "git", experience: 5, frequency: "daily", level: "proficient", subcategory: "version control", relatedSkills: []},
        {icon: DockerIcon, name: "docker", experience: 4, frequency: "daily", level: "advanced", subcategory: "containerization", relatedSkills: []}
    ]},
    {category: "others", skills: [
        {icon: AzureIcon, name: "azure", experience: 3, frequency: "monthly", level: "intermediate", subcategory: "cloud", relatedSkills: []},
        {icon: GoogleCloudIcon, name: "google cloud", experience: 1, frequency: "monthly", level: "beginner", subcategory: "cloud", relatedSkills: []},
        {icon: AWSIcon, name: "aws", experience: 3, frequency: "monthly", level: "intermediate", subcategory: "cloud", relatedSkills: []},
    ]}
]

export default skills;