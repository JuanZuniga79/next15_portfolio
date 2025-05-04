import {ReactNode} from "react";

interface Props{
    title: string
    id?: string
    subtitle?: string
    children?: ReactNode
}
export default function SectionContainer({id, title, subtitle, children}: Props) {
    return(
        <section id={id} className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-4 items-center">
                <h3 className="font-mono font-bold text-xl rounded-full px-6 py-1 border-[1px]">{title}</h3>
                <h4 className="font-sans text-lg font-light">{subtitle}</h4>
            </div>
            {children}
        </section>
    )
}