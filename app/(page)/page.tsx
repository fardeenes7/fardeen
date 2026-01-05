import HeroSection from "./hero";
import ProjectsSection from "../projects/page";

export default function Page() {
    return (
        <main className="max-w-5xl mx-auto px-4">
            <div className="absolute inset-0 bg-linear-to-b from-muted/50 via-transparent to-transparent" />
            <HeroSection />
        </main>
    );
}
