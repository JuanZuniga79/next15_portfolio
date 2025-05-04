import { JSX } from "react"

export interface ITechnologie{
    label: string,
    category: "language" | "framework" | "library" | "platform"
}

export interface IFilters{
    label: string
    icon: ()=> JSX.Element
    items: ITechnologie[]
}

export default interface IProjects{
    name: string
    category: string
    type: string
    description: string
    picture: string
    platforms: string[]
    technologies: ITechnologie[]
    repo?: string
    live?: string
    featured: boolean
    docs?: string
}