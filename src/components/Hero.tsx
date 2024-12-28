"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="absolute size-full overflow-hidden -z-20">
                <img src="gradient.png"
                    className="absolute blur-sm scale-[200%] left-0 top-0 translate-x-[-30%] translate-y-[-30%]" />
                <img src="gradient.png" className="absolute blur-sm sc

                const ale-[200%] right-0 bottom-0 translate-x-[30%] translate-y-[30%] rotate-180"/>
            </div>

            <div className="flex flex-col items-center font-[Agrandir]">

                <div className="lg:flex lg:text-7xl xl:text-8xl font-bold tracking-widest m-0 text-five hidden">
                    {
                        "EUREKAHACKS".split("").map((char, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    animate={{
                                        y: [0, -50],
                                    }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <h1>{char}</h1>
                                    <h1 className="-z-10 absolute top-5 text-orange-200">{char}</h1>
                                </motion.div>
                            )
                        })
                    }
                </div>
                <div
                    className="flex flex-col text-6xl md:text-7xl font-bold tracking-widest m-0 text-five lg:hidden">
                    <div className="flex justify-center">
                        {
                            "EUREKA".split("").map((char, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            y: [0, -50],
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <h1>{char}</h1>
                                        <h1 className="-z-10 absolute top-5 text-orange-200">{char}</h1>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center">
                        {
                            "HACKS".split("").map((char, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        animate={{
                                            y: [0, -50],
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 1.5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <h1>{char}</h1>
                                        <h1 className="-z-10 absolute top-5 text-orange-200">{char}</h1>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-three m-4 text-center">MAY
                    2025</h2>
            </div>

            <div
                className="absolute bottom-20 flex flex-col items-center font-bold text-lg tracking-widest text-five m-4 gap-5">
                <p>@Eureka_hacks</p>
                <JiggleLink text="2024>" href="https://2024.eurekahacks.ca" />
            </div>
        </div>
    );
}


function JiggleLink({
    text,
    href
}: {
    text: string,
    href: string
}) {
    const controls = useAnimation();

    return (
        <motion.a
            href={href}
            className="flex items-center gap-2 cursor-pointer"
            onHoverStart={() => controls.start({
                y: [0, -5, 0],
            })}
        >
            {
                text.split("").map((char, index) => {
                    return (
                        <motion.p
                            key={index}
                            animate={controls}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            {char == ">" ? <ArrowRight /> : char}
                        </motion.p>
                    )
                })
            }
        </motion.a>
    );
}