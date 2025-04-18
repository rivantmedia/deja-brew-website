import Image from "next/image";
import { David_Libre, Montserrat } from "next/font/google";
import NavLink from "./Navlink";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
});

const davidLibre = David_Libre({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--dark-brown)] bg-[url('/public/dark-coffee-pattern.png')] bg-repeat bg-[length:100px] flex flex-col items-center pb-4 font-dela">
            <div className="w-full max-w-[1100px] mx-3 p-2 pt-6 flex flex-col md:flex-row justify-between">
                <div className="flex flex-row items-center gap-6 max-w-[500px] mb-2 md:mb-0">
                    <Image
                        src="/Desktop/logo.png"
                        width={150}
                        height={150}
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                        alt="Deja Brew Logo"
                    />
                    <div className="flex flex-col justify-between h-[100px]">
                        <span className="text-white text-[25px]">Deja Brew</span>
                        <span className={`text-[15px] text-white ${davidLibre.className}`}>
                            Step into a world where coffee isn&apos;t just a beverage,
                            but a journey that speaks of home.
                        </span>
                        <div className="text-white flex flex-row gap-2">
                            <div className="cursor-pointer">
                                <Image
                                    src="/icons/insta-icon.svg"
                                    height={15}
                                    width={15}
                                    alt="Instagram Icon"
                                />
                            </div>
                            <div className="cursor-pointer">
                                <Image
                                    src="/icons/linkdin-icon.svg"
                                    height={15}
                                    width={15}
                                    alt="LinkedIn Icon"
                                />
                            </div>
                            <div className="cursor-pointer">
                                <Image
                                    src="/icons/x-icon.svg"
                                    height={15}
                                    width={15}
                                    alt="X Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop dashed line */}
                <span className="hidden md:block ml-2.5 mr-5 w-0.5 h-auto bg-[length:2px_15px] bg-gradient-to-b from-[#a38c77] from-55% to-transparent to-40% bg-bottom bg-repeat-y opacity-50"></span>

                <div className="h-auto w-full md:w-min md:min-w-[350px] flex flex-row justify-between gap-10">
                    <div className="hidden md:block">
                        <span className="text-[var(--orange)] text-[26px]">Website</span>
                        <ul className="flex flex-col list-none p-0 m-0 ml-1">
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Home
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    About
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Menu
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Locations
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-[var(--orange)] text-[26px]">Company</span>
                        <ul className="flex flex-col list-none p-0 m-0 ml-1">
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Home
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    About
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Menu
                                </NavLink>
                            </li>
                            <li className="w-min">
                                <NavLink href="/" variant="dark">
                                    Locations
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`w-full bg-[var(--orange)] text-white text-center py-2.5 ${davidLibre.className} mt-4`}>
                Desinged With &lt;3 By <span className={montserrat.className}>Rivant</span>
            </div>
        </footer>
    );
}