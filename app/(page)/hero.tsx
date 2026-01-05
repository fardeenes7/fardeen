import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { AnimatedNoise } from "@/components/animated-noise";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center py-60 relative overflow-hidden">
            <AnimatedNoise opacity={0.3} />

            <div className="relative z-10">
                <div className="mb-6">
                    <Image
                        src="/fardeen.jpg"
                        width={100}
                        height={100}
                        className="rounded-full overflow-hidden"
                        alt="Fardeen"
                        priority
                    />
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3">
                    Fardeen Ehsan
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
                    Software Engineer — SaaS & System Architecture
                </h2>

                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                    I build scalable, backend-heavy SaaS products using{" "}
                    <br className="hidden md:block" />
                    <span className="text-foreground font-semibold">
                        Django, DRF, Next.js, and cloud-native infrastructure.
                    </span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                    <Link
                        href="/projects"
                        className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                    >
                        View Projects
                        <IconArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-6 py-3 bg-transparent border border-border rounded-full font-semibold hover:bg-muted transition-colors flex items-center justify-center text-sm"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-muted-foreground">
                        <span>Django</span>
                        <span className="text-border">•</span>
                        <span>FastAPI</span>
                        <span className="text-border">•</span>
                        <span>Next.js</span>
                        <span className="text-border">•</span>
                        <span>PostgreSQL</span>
                        <span className="text-border">•</span>
                        <span>Docker</span>
                        <span className="text-border">•</span>
                        <span>Cloudflare</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
