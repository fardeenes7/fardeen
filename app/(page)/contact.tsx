import Link from "next/link";
import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import socials from "@/data/socials.json";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        I'm currently open to new opportunities. Whether you
                        have a project in mind or want to discuss a role, feel
                        free to reach out.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity text-sm"
                    >
                        <IconMail className="w-4 h-4" />
                        Get in Touch
                    </Link>
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-colors text-sm"
                    >
                        <IconBrandGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition-colors text-sm"
                    >
                        <IconBrandLinkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
