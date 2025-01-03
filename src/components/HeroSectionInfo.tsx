"use client";

import { subscribe } from "@/lib/actions";
import { useEffect, useState } from "react";

export function HeroSectionInfo() {
    const [bgHeight, setBgHeight] = useState(0);
    useEffect(() => {
        setBgHeight(document.getElementById("bg")?.clientHeight ?? 0);
        document.getElementById("info")?.classList.remove("hidden");
    }, []);

    return (
        <div className="text-center text-white pt-24 md:pt-32 lg:pt-32 2xl:pt-44" style={{ minHeight: bgHeight }}
             id="hero">
            <h1 className="hidden md:block font-bold text-8xl lg:text-9xl">EurekaHACKS</h1>
            <h1 className="md:hidden font-bold text-7xl">Eureka</h1>
            <h1 className="md:hidden font-bold text-5xl">HACKS</h1>
            <div className="hidden md:flex justify-center gap-2 text-2xl">
                <h2 className="w-full text-end">April 5th, 2025</h2>
                <h2>|</h2>
                <h2 className="w-full text-start">Abbey Park High School</h2>
            </div>
            <h1 className="md:hidden font-semibold mt-2">May 4th, 2024 | Abbey Park High School</h1>
            <h1></h1>
            <h1 className="font-semibold mt-8 lg:mt-12 text-4xl">Sign Up for Updates</h1>
            <form className="flex flex-col items-center" action={subscribe}>
                <input type="email" placeholder="Email" name="email"
                       className="w-72 md:w-96 lg:w-96 rounded h-12 px-4 mt-4 text-gray-900 font-medium"/>
                <button type="submit" className="w-72 md:w-96 lg:w-96 lg:text-xl h-12 bg-accent-500 mt-4 rounded font-medium">
                    Subscribe
                </button>
            </form>
        </div>
    );
}