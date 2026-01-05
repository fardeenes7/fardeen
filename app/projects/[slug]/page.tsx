import { Badge } from "@/components/ui/badge";
import {
    IconArrowLeft,
    IconTarget,
    IconCpu,
    IconRocket,
    IconCheck,
} from "@tabler/icons-react";
import Link from "next/link";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projects.map((post) => ({
        slug: post.slug,
    }));
}

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors"
            >
                <IconArrowLeft className="w-4 h-4" /> Back to projects
            </Link>

            {/* 1. Project Header */}
            <header className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    {project.title}
                </h1>
                <p className="text-xl text-primary font-medium mb-6">
                    {project.subtitle}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 py-8 border-y border-border">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                            Role
                        </p>
                        <p className="font-semibold">{project.role}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                            Duration
                        </p>
                        <p className="font-semibold">{project.duration}</p>
                    </div>
                </div>
            </header>

            <div className="space-y-24">
                {/* 2. Problem */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                        <IconTarget className="w-6 h-6" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider">
                            Problem
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.problem}
                    </p>
                </section>

                {/* 3. Solution */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                        <IconCheck className="w-6 h-6" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider">
                            Solution
                        </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.solution}
                    </p>
                </section>

                {/* 4. Key Features */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.keyFeatures?.map((feature, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Architecture */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3 text-primary">
                        <IconCpu className="w-6 h-6" />
                        <h2 className="text-2xl font-bold uppercase tracking-wider">
                            Architecture
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg border-b border-border pb-2">
                                Backend
                            </h3>
                            <ul className="space-y-2">
                                {project.architecture?.backend.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="text-muted-foreground"
                                        >
                                            • {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg border-b border-border pb-2">
                                Frontend
                            </h3>
                            <ul className="space-y-2">
                                {project.architecture?.frontend.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="text-muted-foreground"
                                        >
                                            • {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg border-b border-border pb-2">
                                Infrastructure
                            </h3>
                            <ul className="space-y-2">
                                {project.architecture?.infrastructure.map(
                                    (item, i) => (
                                        <li
                                            key={i}
                                            className="text-muted-foreground"
                                        >
                                            • {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="aspect-video bg-muted rounded-3xl border border-border flex items-center justify-center text-muted-foreground italic">
                        Architecture diagram coming soon
                    </div>
                </section>

                {/* 6. Technical Challenges */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Technical Challenges
                    </h2>
                    <div className="space-y-4">
                        {project.technicalChallenges?.map((challenge, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 p-6 rounded-3xl border border-border bg-card"
                            >
                                <span className="text-primary font-bold">
                                    0{i + 1}
                                </span>
                                <p className="text-base text-muted-foreground">
                                    {challenge}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 7. Outcome */}
                <section className="bg-primary/5 border border-primary/10 rounded-3xl p-12 space-y-8">
                    <div className="flex items-center gap-3 text-primary">
                        <IconRocket className="w-6 h-6" />
                        <h2 className="text-xl font-bold uppercase tracking-wider">
                            Outcome
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {project.outcome?.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-4 font-medium"
                            >
                                <div className="w-3 h-3 rounded-full bg-primary" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <div className="mt-32 pt-16 border-t border-border text-center">
                <h2 className="text-2xl font-bold mb-6">
                    Interested in this project?
                </h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                >
                    Let's Talk About It
                </Link>
            </div>
        </main>
    );
}
