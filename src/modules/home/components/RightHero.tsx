import HeroItemContainer from "@/modules/home/components/HeroItemContainer";
import services from "@/core/data/services";
import outstandingSkills from "@/core/data/outstandingSkills";

interface Props {
    service: string;
    skill: string;
}
export default function RightHero({service, skill}: Props) {
    return(
        <section className="flex flex-col gap-y-4 items-end justify-center">
            <HeroItemContainer title={service} right>
                <ul className="flex flex-col gap-y-2 items-end">
                    {services.map((item, i) => (
                        <li key={i} className="italic">
                            {item} -
                        </li>
                    ))}
                </ul>
            </HeroItemContainer>
            <HeroItemContainer title={skill} right>
                <ul className="flex items-center justify-end gap-2 flex-wrap">
                    {outstandingSkills.map((item, i) => (
                        <li key={i} className="px-3 py-0.5 rounded-full bg-sky dark:bg-dark-red text-dark-text
                                dark:text-text text-nowrap">
                            {item}
                        </li>
                    ))}
                </ul>
            </HeroItemContainer>
        </section>
    )
}