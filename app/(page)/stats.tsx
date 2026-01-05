export default function StatsSection() {
    const stats = [
        { label: "Experience", value: "3+ Years" },
        { label: "Production Projects", value: "10+" },
        { label: "Specialization", value: "SaaS & ERP Systems" },
    ];

    return (
        <section className="py-16 border-y border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="text-center md:text-left space-y-2"
                    >
                        <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
                            {stat.value}
                        </p>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
