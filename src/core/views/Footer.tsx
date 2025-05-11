export default async function Footer() {
	return (
		<footer
			className="border-t-[1px] text-xs border-crust dark:border-dark-crust h-16 w-full flex justify-center
      md:text-sm md:h-20"
		>
			<div
				className="w-full flex flex-col xl:flex-row items-center justify-center 
        gap-y-2 text-text dark:text-dark-text xl:justify-between xl:w-[80%]"
			>
				<p className="font-light font-sans">
					© 2025 Juan Zuniga (Janz) All rights reserved. ✨
				</p>
				<p className="font-light font-sans">
					Built with Next.js 15 with React 19 and a lot of ❤ (love)
				</p>
			</div>
		</footer>
	);
}
