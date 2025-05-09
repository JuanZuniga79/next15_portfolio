import ITestimonial from "../types/ITestimonial";
import Image, { StaticImageData } from "next/image";

interface Props {
	data: ITestimonial;
}
export default function Testimonial({ data }: Props) {
	return (
		<li
			className="border-[1px] rounded-lg border-text/40 dark:border-dark-text/40
            p-3 flex flex-col gap-y-2 relative"
		>
			<div className="flex items-center gap-x-2 justify-between">
				<div className="flex items-center gap-x-3 text-sm font-light">
					<figure
						className="min-w-12 min-h-12 max-w-12 rounded-full flex items-center justify-center 
                        p-0.5"
					>
						{data.type === "image" && (
							<Image
								src={data.image as StaticImageData}
								alt={`${data.name} testimonial`}
								width={400}
								height={400}
								className="rounded-full w-full h-full object-contain"
							/>
						)}
					</figure>
					<div className="flex flex-col">
						<span>{data.name}</span>
						<span className="text-text/70 dark:text-dark-text/70">
							{data.subtitle}
						</span>
					</div>
				</div>
			</div>
			<p className="text-wrap break-words font-sans text-sm font-light italic">
				{data.description}
			</p>
		</li>
	);
}

