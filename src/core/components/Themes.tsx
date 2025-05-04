'use client';

import {useEffect, useState} from "react";
import MoonIcon from "@/core/assets/icons/MoonIcon";
import SunIcon from "@/core/assets/icons/SunIcon";

export default function Themes() {

    const [dark, setDark] = useState<boolean>(false);

    useEffect(() => {
        const darkActive = localStorage.getItem('theme');
        if(darkActive === null) return;
        if(darkActive === "dark"){
            setDark(true);
            document.body.classList.add("dark");
        }
    }, []);

    const toggleDark = () => {
        localStorage.setItem("theme", dark ? "light" : "dark");
        if(dark){
            document.body.classList.remove("dark");
        }else{
            document.body.classList.add("dark");
        }
        setDark(!dark);
    }

    return(
        <button onClick={toggleDark} className="p-1 rounded-full bg-crust hover:bg-sky dark:bg-dark-mantle
            dark:hover:bg-dark-red">
            <figure className={`w-6 h-6 ${dark ? "hover:-rotate-45" : "hover:rotate-45"} text-text
                cursor-pointer dark:text-dark-text dark:hover:text-text hover:text-dark-text
                transition-all duration-200 ease-in-out relative flex items-center justify-center`}>
                <div className={`${dark ? "opacity-100" : "opacity-0"} absolute w-full h-full transition-opacity 
                    duration-100`}>
                    <SunIcon />
                </div>
                <div className={`${dark ? "opacity-0" : "opacity-100"} absolute w-full h-full transition-opacity 
                    duration-100`}>
                    <MoonIcon />
                </div>
            </figure>
        </button>
    )
}