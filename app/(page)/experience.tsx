export default function ExperienceSnapshot() {
    const experiences = [
        {
            company: "Alzaf",
            role: "Software Engineer",
            points: [
                "Led the front-end team to deliver multiple modern, responsive UI across multiple projects",
                "Built the front-end for a  cloud-based hosted server-management system from scratch.",
            ],
        },
        {
            company: "DFCL",
            role: "Software Engineer",
            points: [
                "Rebuilt ERP system from scratch",
                "Designed central API & microservices",
                "Built multiple Next.js dashboards",
                "Led architecture & deployment decisions",
            ],
        },
        {
            company: "Freelance Web Developer",
            role: "Full-stack Developer",
            points: [
                "Delivered Django & Next.js projects",
                "Worked directly with non-technical clients",
                "Designed end-to-end solutions",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="flex items-center gap-3 mb-12">
                <h2 className="text-2xl font-bold tracking-tight text-primary">
                    Experience Snapshot
                </h2>
            </div>

            <div className="space-y-8 max-w-3xl">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">
                                    {exp.role}
                                </h3>
                                <p className="text-primary font-semibold">
                                    {exp.company}
                                </p>
                            </div>

                            <ul className="space-y-2">
                                {exp.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-2" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
