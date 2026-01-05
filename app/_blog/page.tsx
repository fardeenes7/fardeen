import Link from "next/link";
import { IconArrowRight, IconCalendar } from "@tabler/icons-react";
import blogPosts from "@/data/blog.json";

export default function BlogPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <header className="mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Blog
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Thoughts on software engineering, architecture, and building
                    SaaS products.
                </p>
            </header>

            <div className="space-y-16">
                {blogPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="group relative flex flex-col items-start"
                    >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <IconCalendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </time>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {post.excerpt}
                        </p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                        >
                            Read Article <IconArrowRight className="w-4 h-4" />
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
