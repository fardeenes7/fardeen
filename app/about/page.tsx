import {
    IconUser,
    IconBrain,
    IconHeart,
    IconRocket,
} from "@tabler/icons-react";

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <header className="mb-16">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    About Me
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    I’m a software engineer focused on building practical,
                    scalable SaaS products.
                </p>
            </header>

            <div className="space-y-24">
                <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 flex items-center gap-3 text-primary">
                        <IconUser className="w-6 h-6" />
                        <h2 className="text-xl font-bold uppercase tracking-wider">
                            Background
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-6 text-base text-muted-foreground leading-relaxed">
                        <p>
                            I have a Computer Science background and experience
                            building ERP systems, automation platforms, and
                            multi-tenant SaaS applications.
                        </p>
                        <p>
                            My work often involves taking complex business
                            requirements and translating them into clean,
                            maintainable codebases that can grow with the
                            business.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 flex items-center gap-3 text-primary">
                        <IconBrain className="w-6 h-6" />
                        <h2 className="text-xl font-bold uppercase tracking-wider">
                            Work Philosophy
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-8">
                        <div className="p-8 rounded-3xl border border-border bg-card/50 space-y-4">
                            <h3 className="text-xl font-bold text-foreground">
                                Clarity over complexity
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                I believe the best solutions are the ones that
                                are easiest to understand and maintain. I avoid
                                over-engineering and focus on what provides the
                                most value.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl border border-border bg-card/50 space-y-4">
                            <h3 className="text-xl font-bold text-foreground">
                                Architecture before features
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                A solid foundation is essential for long-term
                                success. I spend time upfront designing the
                                system architecture to ensure features can be
                                added reliably.
                            </p>
                        </div>
                        <div className="p-8 rounded-3xl border border-border bg-card/50 space-y-4">
                            <h3 className="text-xl font-bold text-foreground">
                                Long-term maintainability
                            </h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Code is read much more often than it is written.
                                I write code with the future developer in mind,
                                ensuring it's well-structured and documented.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
