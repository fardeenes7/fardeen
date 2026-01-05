export default function HowIBuild() {
    const steps = [
        {
            title: "Understand the business problem & constraints",
            description:
                "I start by identifying the core problem and the business context to ensure the solution is practical and effective.",
        },
        {
            title: "Design scalable, maintainable system architecture",
            description:
                "Planning the database schema, API structure, and infrastructure to handle growth and simplify future updates.",
        },
        {
            title: "Build clean APIs and intuitive UIs",
            description:
                "Implementing robust backend logic with Django/FastAPI and responsive frontends with Next.js.",
        },
        {
            title: "Optimize performance, security & DX",
            description:
                "Refining the system for speed, ensuring data protection, and maintaining a high-quality developer experience.",
        },
        {
            title: "Iterate based on real usage",
            description:
                "Collecting feedback and monitoring performance to continuously improve the product.",
        },
    ];

    return (
        <section className="py-20">
            <h2 className="text-2xl font-bold tracking-tight mb-12 text-primary">
                How I Build Software
            </h2>
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="flex gap-8 items-start group">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {index + 1}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
