import { StaticImageData } from "next/image";
import { JSX } from "react";

export default interface ITestimonial {
    description: string;
    name: string;
    subtitle: string;
    image: JSX.Element | StaticImageData;
    type: "image" | "icon";
}