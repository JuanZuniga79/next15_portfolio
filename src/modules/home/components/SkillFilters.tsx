'use client';
import skills from "../data/skills";

interface Props{
    active: string;
    changeFilter: (value: string) => void;
}
export default function SkillFilters({changeFilter, active}: Props){

    return(
        <ul className="flex items-center gap-x-4 self-center border-t-[1px] border-text/60
            w-fit px-6 dark:border-dark-text/60 rounded-t-xl border-x-[1px] py-1.5 absolute
            bg-primary dark:bg-dark-primary -top-10">
            {skills.map((category, i)=> (
                <li key={i} onClick={()=> changeFilter(category.category)}>
                    <span className={`capitalize hover:text-blue dark:hover:text-dark-red cursor-pointer text-lg 
                        font-mono font-semibold px-2 ${active === category.category && 'text-blue dark:text-dark-red'}`}>
                        {category.category}
                    </span>
                </li>
            ))}
        </ul>
    )
}