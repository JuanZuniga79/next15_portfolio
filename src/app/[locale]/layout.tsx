import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Roboto_Serif } from "next/font/google";
import "../globals.css";
import Header from "@/core/views/Header";
import Footer from "@/core/views/Footer";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
	variable: "--font-roboto-serif",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Janz Portfolio",
	description: "Juan Camilo Zuniga Pacheco Portfolio",
	icons: "../favicon.ico",
	applicationName: "Janz Portfolio",
	keywords: ["portfolio"],
	creator: "Janz",
};

export default async function LocaleLayout({
	children,
	params,
}: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang={locale}>
			<body
				className={`${dmSans.variable} ${jetbrainsMono.variable} ${robotoSerif.variable} antialiased
                bg-primary dark:bg-dark-primary flex flex-col items-center transition-colors duration-100
                min-h-dvh w-dvw scroll-smooth overflow-y-auto overflow-x-hidden`}
			>
				<NextIntlClientProvider>
					<Header />
					<main
						className="relative min-h-dvh h-fit w-full xl:w-[90%] 2xl:w-[80%] flex flex-col gap-y-20 text-text
                        dark:text-dark-text pb-16 pt-32 px-5 lg:pt-0"
					>
						{children}
					</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
