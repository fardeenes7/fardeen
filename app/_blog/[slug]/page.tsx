import { IconArrowLeft, IconCalendar, IconTag } from "@tabler/icons-react";
import Link from "next/link";
import blogPosts from "@/data/blog.json";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors"
            >
                <IconArrowLeft className="w-4 h-4" /> Back to blog
            </Link>

            <article>
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1.5">
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
                        <div className="flex items-center gap-1.5">
                            <IconTag className="w-4 h-4" />
                            <div className="flex gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="hover:text-primary transition-colors cursor-default"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* In a real app, we would use a markdown parser here */}
                    {post.content.split("\n\n").map((paragraph, i) => {
                        if (paragraph.startsWith("###")) {
                            return (
                                <h3
                                    key={i}
                                    className="text-2xl font-bold mt-12 mb-6"
                                >
                                    {paragraph.replace("### ", "")}
                                </h3>
                            );
                        }
                        if (
                            paragraph.startsWith("1.") ||
                            paragraph.startsWith("2.") ||
                            paragraph.startsWith("3.")
                        ) {
                            const [title, ...rest] = paragraph.split("\n");
                            return (
                                <div key={i} className="mt-8 mb-4">
                                    <h4 className="text-xl font-bold mb-2">
                                        {title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {rest.join("\n")}
                                    </p>
                                </div>
                            );
                        }
                        return (
                            <p
                                key={i}
                                className="text-lg text-muted-foreground leading-relaxed mb-6"
                            >
                                {paragraph}
                            </p>
                        );
                    })}
                </div>
            </article>

            <div className="mt-20 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold mb-8">More from the blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts
                        .filter((p) => p.slug !== slug)
                        .slice(0, 2)
                        .map((otherPost) => (
                            <Link
                                key={otherPost.slug}
                                href={`/blog/${otherPost.slug}`}
                                className="group"
                            >
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {otherPost.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {otherPost.excerpt}
                                </p>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
}
