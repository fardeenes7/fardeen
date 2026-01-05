import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    All Projects
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl">
                    A collection of systems, tools, and platforms I've built
                    over the years.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group flex flex-col p-6 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-xl"
                    >
                        <div className="aspect-video bg-muted rounded-2xl mb-6 overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                                {project.title} Preview
                            </div>
                        </div>

                        <div className="grow space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="font-normal"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground font-semibold transition-all text-sm"
                            >
                                View Case Study{" "}
                                <IconArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
