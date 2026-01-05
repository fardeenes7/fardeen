import { Badge } from "@/components/ui/badge";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import projects from "@/data/projects.json";

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

    return (
        <section id="projects" className="py-20">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-3 text-primary">
                        Featured Projects
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-2xl">
                        A selection of my recent work in SaaS and ERP systems.
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {featuredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
                    >
                        <div className="md:col-span-7 overflow-hidden rounded-3xl border border-border/50 bg-muted aspect-video relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
                                {project.title} Preview
                            </div>
                            <Link
                                href={`/projects/${project.slug}`}
                                className="absolute inset-0 z-10"
                            >
                                <span className="sr-only">
                                    View {project.title}
                                </span>
                            </Link>
                        </div>

                        <div className="md:col-span-5 space-y-5">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    <Link href={`/projects/${project.slug}`}>
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <ul className="space-y-2">
                                {project.summaryPoints?.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-sm text-muted-foreground"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="font-medium px-3 py-1"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground font-semibold transition-all text-sm"
                                >
                                    View Case Study{" "}
                                    <IconArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
