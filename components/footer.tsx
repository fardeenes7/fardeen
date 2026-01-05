import Link from "next/link";
import socials from "@/data/socials.json";

export function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} fardiin. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                    <Link
                        href="/about"
                        className="hover:text-foreground transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:text-foreground transition-colors"
                    >
                        Projects
                    </Link>
                    {/* <Link
                        href="/blog"
                        className="hover:text-foreground transition-colors"
                    >
                        Blog
                    </Link> */}
                    <Link
                        href="/contact"
                        className="hover:text-foreground transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex gap-6 text-sm text-muted-foreground">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
