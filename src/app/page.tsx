export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="group hover:-translate-y-5 transition-all duration-700 hover:cursor-pointer">
                <h1 className="text-[100px] font-bold m-0">EurekaHacks <span className="bg-primaryGradient bg-clip-text text-transparent">2025</span></h1>
                <div className="w-0 group-hover:w-full h-[20px] bg-primaryGradient transition-all duration-700"></div>
            </div>
        </div>
    );
}
