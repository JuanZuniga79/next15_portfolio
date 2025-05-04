'use client'

import { FunnelIcon } from "lucide-react";
import { useState } from "react"

interface Props{
    locale: string
}
export default function ProjectContainer({locale}: Props){
    const [openFilters, setOpenFilters] = useState<boolean>(false);
    return(
        <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2 w-full">
                <button onClick={() => setOpenFilters(!openFilters)}
                    type="button"
                    aria-label="filters"
                    className="flex items-center gap-x-2 place-self-end px-5 py-0.5 rounded-lg
                    bg-blue hover:bg-blue/60 dark:bg-dark-red dark:hover:bg-red/60 
                    text-dark-text cursor-pointer">
                    <FunnelIcon size={16}/>
                    <span className="capitalize font-serif text-base">filters</span>
                </button>
                <div className={`w-full h-1 bg-mantle dark:bg-dark-mantle rounded-xl 
                    transition-all duration-100 ease-in-out ${openFilters ? 'h-[200px]' : 'h-[1px]'}
                    grid grid-cols-6 gap-4`}>
                    
                </div>
            </div>
        </div>
    )
}