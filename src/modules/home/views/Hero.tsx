import { getTranslations } from "next-intl/server";
import LeftHero from "@/modules/home/components/LeftHero";
import RightHero from "@/modules/home/components/RightHero";
import Image from "next/image";
import profile from "@/core/assets/pictures/profile.png";
import "@/modules/home/styles/hero.css";

export default async function Hero() {
	const t = await getTranslations("Home");

	return (
		<div className="relative h-fit w-full flex flex-col items-center gap-y-14">
			<div className="order-3">
				<LeftHero />
			</div>
			<section className="col-span-2 h-full flex flex-col items-center justify-center gap-y-8 order-1">
				<div className="flex flex-col items-center gap-y-2">
					<h2 className="text-text dark:text-dark-text text-4xl font-semibold font-serif text-center">
						Juan Camilo Zuniga
					</h2>
					<h5
						className="text-subtext-0 dark:text-dark-subtext-0 text-sm font-mono font-light
                        text-center capitalize"
					>
						{t("job")}
					</h5>
				</div>
				<figure
					className="rounded-full dark:bg-dark-crust bg-mantle profile transition-colors duration-300
            w-[60%]"
				>
					<Image
						src={profile}
						alt="Profile image"
						width={400}
						height={400}
						className="rounded-full border-4
                        dark:border-dark-mantle border-crust transition-colors duration-300"
					/>
				</figure>
			</section>
			<div className="order-2">
				<RightHero service={t("services")} skill={t("skill")} />
			</div>
		</div>
	);
}
