import { JSX } from "react";

export interface ISkill {
    category: string;
    skills: ISkillItem[];
}

export interface ISkillItem {
    icon: () => JSX.Element;
    name: string
    experience: number
    subcategory: string
    level: "beginner" | "novice" | "intermediate" | "advanced" | "proficient" 
    frequency: "daily" | "weekly" | "monthly" | "yearly" | "never"
    relatedSkills: string[]
    certification?: string[]
    contributions?: string[]
    achievements?: string[]
    tools?: string[]
}