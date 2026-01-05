import HeroSection from "./hero";
import StatsSection from "./stats";
import FeaturedProjects from "./projects";
import HowIBuild from "./how-i-build";
import TechStack from "./tech-stack";
import ExperienceSnapshot from "./experience";
import ContactSection from "./contact";
import { FadeIn } from "@/components/fade-in";

export default function Page() {
    return (
        <main className="max-w-5xl mx-auto px-6">
            <div className="absolute inset-0 bg-linear-to-b from-muted/50 via-transparent to-transparent pointer-events-none" />
            <HeroSection />
            <FadeIn>
                <StatsSection />
            </FadeIn>
            <FadeIn>
                <FeaturedProjects />
            </FadeIn>
            <FadeIn>
                <HowIBuild />
            </FadeIn>
            <FadeIn>
                <TechStack />
            </FadeIn>
            <FadeIn>
                <ExperienceSnapshot />
            </FadeIn>
            <FadeIn>
                <ContactSection />
            </FadeIn>
        </main>
    );
}
