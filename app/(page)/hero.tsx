import Link from "next/link";
import { IconSparkles, IconArrowRight } from "@tabler/icons-react";
import { AnimatedNoise } from "@/components/animated-noise";

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-center px-6 pt-24- pb-20- py-40 relative">
            <AnimatedNoise opacity={0.5} />

            {/* Content */}
            <div className="relative z-10 text-start">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 shadow-sm">
                    <IconSparkles className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                        Open to work
                    </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    <span className="text-foreground ">Hi, I am </span>
                    <span className="bg-linear-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
                        fardiin.
                    </span>
                </h1>
                <h2 className="mb-6">Software Engineer — SaaS & Systems</h2>

                <p className="md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed text-balance">
                    I build scalable products using Django, DRF, Next.js, and
                    cloud infrastructure.
                </p>

                <div className="mb-8">
                    <h3 className="font-bold text-lg mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Python",
                            "Django",
                            "DRF",
                            "Next.js",
                            "TypeScript",
                            "PostgreSQL",
                            "Docker",
                            "Kubernetes",
                            "AWS",
                            "GCP",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span>See my recent works</span>
                        <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
