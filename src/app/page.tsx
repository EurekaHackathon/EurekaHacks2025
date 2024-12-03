import * as motion from "framer-motion/client"

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            
            <div className="absolute size-full overflow-hidden">
                <img src="blob.svg" className="blur-[30px] absolute top-[-120px] left-[60px] scale-[150%]" />
                <img src="blob.svg" className="blur-[30px] absolute bottom-[-120px] right-[60px] scale-[150%] rotate-180" />
            </div>

            <div className="flex flex-col items-center">
                <div className="relative">
                    <h1 className="text-[100px] font-bold font-[Agrandir] tracking-widest m-0 text-five">EUREKAHACKS</h1>
                    <h1 className="text-[100px] font-bold font-[Agrandir] tracking-widest m-0 absolute top-5 text-contrast -z-10">EUREKAHACKS</h1>
                </div>

                <h2 className="text-[80px] font-bold font-[Agrandir] tracking-widest text-three m-4">MAY 2025</h2>
            </div>
            <div className="absolute bottom-20">
                <p className="font-bold text-lg tracking-widest text-five m-4">@Eureka_hacks</p>
            </div>
        </div>
    );
}
