import Image from 'next/image'
import * as motion from "framer-motion/client"
import { cn } from "@/lib/utils";


function Polaroid({ className="", img="", rotation=0 }) {
    return (
        <motion.div 
            className={cn("aspect-[3.5/4.2] w-80 bg-white flex justify-center", className)}
            drag
            style={{
                rotate: rotation
            }}
            dragConstraints={{
                left: 0, right: 0, top: 0, bottom: 0,
            }}
            whileHover={{scale: 1.05, cursor: "pointer"}}
        >
            <div className="box-border p-[6%] pb-[20%] w-full h-full">
                <div className="size-full" style={{background: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                </div>
            </div>
        </motion.div>
    );
}

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Polaroid className="absolute left-[10vw] top-[10vh] z-10" rotation={8} img='me.jpg' />
            <Polaroid className="absolute right-[10vw] bottom-[30vh] z-10" rotation={-20} img='team.jpg' />

            <motion.div className="group hover:cursor-pointer"
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {duration: 2, ease: "easeOut"}
                }}
                whileHover={{
                    y: -40,
                    transition: {duration: 0.8}
                }}
            >
                <h1 className="text-[100px] font-bold m-0">
                    EurekaHacks <span className="bg-primaryGradient bg-clip-text text-transparent">2025</span>
                </h1>
                <div className="w-0 group-hover/:w-full h-4 bg-primaryGradient duration-700"></div>
            </motion.div>
        </div>
    );
}
