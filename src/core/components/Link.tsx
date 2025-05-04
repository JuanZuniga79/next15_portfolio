'use client'

import { useCallback } from "react";

export default function Link({id, label}: {id: string, label: string}){
    
    const scrollToSection = useCallback(() => {
        if(id === "") window.scrollTo({top: 0, behavior: 'smooth'});
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, [id]);

    return(
        <button onClick={scrollToSection} className="text-nowrap cursor-pointer capitalize">
            {label}
        </button>
    )
}