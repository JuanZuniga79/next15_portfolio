import { getTranslations } from "next-intl/server";
import SectionContainer from "../components/SectionContainer";
import getTestimonials from "../data/testimonials";
import Testimonial from "../components/Testimonial";

interface Props {
	locale: string;
}
export default async function Testimonials({ locale }: Props) {
	const t = await getTranslations("Testimonials");
	const data = await getTestimonials(locale);

	return (
		<SectionContainer title={t("title")} subtitle={t("subtitle")}>
			<ul
				className="relative w-full h-fit grid grid-cols-1 sm:grid-cols-2
        xl:grid-cols-3 gap-5"
			>
				{data.map((testimonial, index) => (
					<Testimonial key={index} data={testimonial} />
				))}
			</ul>
		</SectionContainer>
	);
}
