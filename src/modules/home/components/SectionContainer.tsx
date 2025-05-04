import {ReactNode} from "react";

interface Props{
    title: string
    subtitle?: string
    children?: ReactNode
}
export default function SectionContainer({title, subtitle, children}: Props) {
    return(
        <section className="flex flex-col gap-y-16">
            <div className="flex flex-col gap-y-4 items-center">
                <h3 className="font-mono font-bold text-xl rounded-full px-4 py-0.5 border-[1px]">{title}</h3>
                <h4 className="font-sans text-lg font-light">{subtitle}</h4>
            </div>
            {children}
        </section>
    )
}