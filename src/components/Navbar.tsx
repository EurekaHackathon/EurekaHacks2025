"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Icon } from "@iconify/react";

export default function Navbar() {
    const [isScrollPositionNotZero, setIsScrollPositionNotZero] = useState(false);
    const [isUserScrolled, setIsUserScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [clickedOnce, setClickedOnce] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsUserScrolled(true);
            if (window.scrollY > 0) {
                setIsScrollPositionNotZero(true);
            } else {
                setIsScrollPositionNotZero(false);
            }
        };
        setIsScrollPositionNotZero(window.scrollY > 0);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setClickedOnce(true);
        setIsAnimating(true);
        setIsMenuOpen(!isMenuOpen);
        setTimeout(() => {
            setIsAnimating(false);
        }, 300); // Match this duration with the CSS transition duration
    };

    return (
        <nav
            className={`fixed flex flex-col lg:items-center w-full top-0 z-40 text-gray-200 ease-in-out
             ${isScrollPositionNotZero ? "backdrop-brightness-95 backdrop-blur-xl" : ""}
             ${isUserScrolled || clickedOnce ? "duration-500 lg:duration-200" : ""}
             ${isMenuOpen ? "backdrop-brightness-75 backdrop-blur-3xl" : ""}`}>
            <div className="hidden lg:flex items-center justify-between py-4 lg:w-[85%] 2xl:w-[60%]">
                <div className="flex items-center font-semibold gap-12">
                    <Image className="w-12 h-auto" src={logo} alt="EurekaHACKS Logo"/>
                    <a href="#about">About</a>
                    <a href="#past">Past Years</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#faq">FAQ</a>
                    <a href="#team">Team</a>
                </div>
                <div className="text-3xl flex items-center gap-6">
                    <a href="https://www.instagram.com/eureka_hacks/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/eurekahacks" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin"/>
                    </a>
                    <a href="https://discord.gg/ApEmE7g7GB" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:discord"/>
                    </a>
                    <a href="https://github.com/EurekaHackathon" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github"/>
                    </a>
                </div>
            </div>
            <div className="flex lg:hidden items-center justify-between mx-4 py-2">
                <Image className="w-10 md:w-12 h-auto" src={logo} alt="EurekaHACKS Logo"/>
                <button onClick={toggleMenu}>
                    {isMenuOpen && <Icon icon="mdi:close" className="text-3xl md:text-4xl fade-in"/>}
                    {!isMenuOpen && <Icon icon="mdi:menu" className={`text-3xl md:text-4xl ${clickedOnce ? "fade-in" : ""}`}/>}
                </button>
            </div>
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="h-[100vh] fade-in flex flex-col items-center justify-center gap-8 md:gap-12">
                    <div className="flex flex-col gap-4 md:gap-8 landscape:gap-4 text-xl md:text-4xl landscape:text-2xl font-semibold">
                        <a href="#about" onClick={toggleMenu}>About</a>
                        <a href="#past" onClick={toggleMenu}>Past Years</a>
                        <a href="#sponsors" onClick={toggleMenu}>Sponsors</a>
                        <a href="#faq" onClick={toggleMenu}>FAQ</a>
                        <a href="#team" onClick={toggleMenu}>Team</a>
                    </div>
                    <div className="text-3xl md:text-5xl landscape:text-4xl flex items-center gap-6 md:gap-12 pb-20">
                        <a href="https://www.instagram.com/eureka_hacks/" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram"/>
                        </a>
                        <a href="https://www.linkedin.com/company/eurekahacks" target="_blank"
                           rel="noopener noreferrer">
                            <Icon icon="mdi:linkedin"/>
                        </a>
                        <a href="https://discord.gg/ApEmE7g7GB" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:discord"/>
                        </a>
                        <a href="https://github.com/EurekaHackathon" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}