'use client';
import { useEffect, useState } from "react";
import SkillFilters from "./SkillFilters";
import skills from "../data/skills";
import { ISkillItem } from "../types/ISkill";
import { Calendar, Clock, Pickaxe } from "lucide-react";
import PowerIcon from "../assets/icons/PowerIcon";
import { useTranslations } from "next-intl";
import { getColor, getShadow, getValue } from "../utils/skillsUtils";
import { Link } from "@/i18n/navigation";

export default function SkillsContainer(){

    const [data, setData] = useState<ISkillItem[]>([]);
    const [active, setActive] = useState<string>('');

    useEffect(() => {
        changeFilter(skills[0].category);
        setActive(skills[0].category);
    }, [])

    const changeFilter = (value: string) => {
        setActive(value);
        setData(skills.filter(skill => skill.category === value)[0].skills
            .sort((a, b) => {
                if(a.experience !== b.experience) return b.experience - a.experience;
                const value_a = getValue(a.level);
                const value_b = getValue(b.level);
                return value_b - value_a;
        }))
    }

    const t = useTranslations('Skills');

    return(
        <div className="relative flex flex-col items-center">
            <SkillFilters changeFilter={changeFilter} active={active}/>
            <ul className="border-[1px] border-text/60 dark:border-dark-text/60
                w-full rounded-xl p-8 grid grid-cols-4 gap-5 transition-all duration-150 h-fit">
                {data.map((skill, i) => (
                    <li key={i} 
                        className={`border-[1px] border-text/40 dark:border-dark-text/40
                        ${getShadow(skill.level)} py-4 w-full
                        px-3 rounded-lg flex flex-col gap-4 hover:shadow-lg`}>
                        <div className="flex items-end gap-x-2 relative">
                            <figure className="w-8 h-8">
                                <skill.icon />
                            </figure>
                            <div className="flex items-center gap-x-4">
                                <h5 className="capitalize font-mono font-semibold text-xl">{skill.name}</h5>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-1 relative w-full pl-6">
                            <div className="grid grid-cols-[140px_110px] gap-x-4 gap-y-2 text-xs px-4 font-mono font-light">
                                <div className="flex items-center gap-x-2">
                                    <Pickaxe size={17} />
                                    <p className="capitalize">{skill.subcategory}</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <Clock size={17} />
                                    <p className="capitalize">{skill.frequency}</p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <Calendar size={17} />
                                    <p className="flex items-center gap-x-1">
                                        +{skill.experience}
                                        <span className="capitalize">{t('experience')}</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-1">
                                    <figure className="w-[17px] h-[17px]">
                                        <PowerIcon />
                                    </figure>
                                    <p className="capitalize">{skill.level}</p>
                                </div>
                                <div className="flex flex-col gap-y-0.5 col-span-2 mt-2">
                                    <span className="capitalize">{t('skill')}</span>
                                    <div className="w-full flex items-center bg-crust dark:bg-dark-text 
                                        h-2 rounded-md overflow-hidden">
                                        {[...Array(getValue(skill.level))].map((_, i) => (
                                            <div key={i} className={`${getColor(skill.level)} h-full w-[20%]`}>
                                                <span className="select-none text-transparent">.</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}