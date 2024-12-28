import { HeroSectionArt } from "@/components/HeroSectionArt";
import { HeroSectionInfo } from "@/components/HeroSectionInfo";

export default function Home() {

    return (
        <div>
            <HeroSectionArt/>
            <div className="relative z-10">
                <HeroSectionInfo/>
            </div>
        </div>
    );
}