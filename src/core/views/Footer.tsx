export default async function Footer(){
    return(
        <footer className="border-t-[1px] border-crust dark:border-dark-crust h-16 w-full flex justify-center">
            <div className="w-[80%] flex items-center justify-between text-text dark:text-dark-text">
                <p className="font-light font-sans">
                    © 2025 Juan Zuniga (Janz) All rights reserved. ✨
                </p>
                <p className="font-light font-sans">
                    Built with Next.js 15 with React 19 and a lot of ❤️ (love)
                </p>
            </div>
        </footer>
    )
}