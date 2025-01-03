import { HeroSectionArt } from "@/components/HeroSectionArt";
import { HeroSectionInfo } from "@/components/HeroSectionInfo";
import { AboutSection } from "@/components/AboutSection";
import PastYearsSection from "@/components/PastYearsSection";
import { SponsorSection } from "@/components/SponsorSection";
import FaqSection from "@/components/FaqSection";
import TeamSection from "@/components/TeamSection";

export default function Home() {
    return (
        <div>
            <HeroSectionArt/>
            <div className="relative z-10">
                <HeroSectionInfo/>
                <div className="hidden bg-[#512fa6ff]" id="info">
                    <AboutSection/>
                    <PastYearsSection/>
                    <SponsorSection/>
                    <FaqSection/>
                    <TeamSection/>
                    {/*Temp visitor counter*/}
                    {/*<div className="hidden">*/}
                    {/*    <a href="https://www.counter12.com">*/}
                    {/*        <img*/}
                    {/*            src="https://www.counter12.com/img-36Y3c7b1w9yc048W-3.gif"*/}
                    {/*            alt="contador de acesso grátis"/>*/}
                    {/*    </a>*/}
                    {/*    <script type="text/javascript" src="https://www.counter12.com/ad.js?id=36Y3c7b1w9yc048W"/>*/}
                    {/*    <br/>*/}
                    {/*    <a href="https://meuip.page/qual-e-o-meu-ip/" target="_blank">*/}
                    {/*        <img*/}
                    {/*            src="https://img.meuip.page/selo-54wbBYA2wyc2bbW0.gif" alt="ip fixo"/>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}