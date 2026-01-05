export default function TechStack() {
    const tech = [
        {
            category: "Backend",
            items: [
                "Django",
                "Django REST Framework",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "Celery",
                "Firebase (Auth)",
                "REST APIs",
            ],
        },
        {
            category: "Frontend",
            items: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
            ],
        },
        {
            category: "Infrastructure",
            items: [
                "Docker",
                "DigitalOcean",
                "Cloudflare (DNS, CDN)",
                "S3-compatible storage",
            ],
        },
    ];

    return (
        <section id="tech" className="py-20">
            <h2 className="text-2xl font-bold tracking-tight mb-12 text-primary">
                Tech Stack
            </h2>
            <div className="space-y-8 max-w-3xl">
                {tech.map((group) => (
                    <div key={group.category} className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
