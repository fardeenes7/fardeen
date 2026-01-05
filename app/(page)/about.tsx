import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
    return (
        <section id="about" className="py-20">
            <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        I'm a Software Engineer with a passion for building
                        robust and scalable systems. With a strong foundation in
                        both backend and frontend technologies, I enjoy bridging
                        the gap between complex server-side logic and intuitive
                        user interfaces.
                    </p>
                    <p>
                        My journey in tech started with a curiosity about how
                        things work under the hood, which led me to dive deep
                        into systems programming and cloud infrastructure.
                        Today, I focus on building SaaS products that solve
                        real-world problems.
                    </p>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                            What I do
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>• Architecting scalable backend systems</li>
                            <li>
                                • Building responsive and performant web
                                applications
                            </li>
                            <li>
                                • Designing and implementing RESTful & GraphQL
                                APIs
                            </li>
                            <li>
                                • Optimizing database performance and cloud
                                costs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
