import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import Image from "next/image";

export const revalidate = 60;
export default async function ProjectsPage() {
    // const featured = allProjects.find((project) => project.slug === "unidemy")!;
    // const top2 = allProjects.find((project) => project.slug === "pricee")!;
    // const top3 = allProjects.find((project) => project.slug === "illiyn")!;
    // const sorted = allProjects
    //     .filter((p) => p.published)
    //     .filter(
    //         (project) =>
    //             project.slug !== featured.slug &&
    //             project.slug !== top2.slug &&
    //             project.slug !== top3.slug
    //     )
    //     .sort(
    //         (a, b) =>
    //             new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
    //             new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    //     );
    const featured = allProjects.find((project) => project.slug === "unidemy")!;
    const top2 = allProjects.find((project) => project.slug === "pricee")!;
    const sorted = allProjects
        .filter((p) => p.published)
        .filter(
            (project) =>
                project.slug !== featured.slug && project.slug !== top2.slug
        )
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        );

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold font-display tracking-tight text-zinc-800 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-700">
                        Some of the projects are from work and some are on my
                        own time. &quot;🔨&quot; Marks ongoing projects and/or
                        subprojects.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
                    <div className="col-span-2">
                        <Card>
                            <Link href={`/projects/${featured.slug}`}>
                                <article className="relative w-full h-full group overflow-hidden pb-10">
                                    <div className="h-auto w-full overflow-hidden">
                                        <Image
                                            src={
                                                featured.image
                                                    ? featured.image
                                                    : `/api/og?type=project&title=${featured.title}`
                                            }
                                            alt={featured.title}
                                            className="w-full h-auto object-cover object-center rounded-t-lg group-hover:opacity-80 duration-1000 group-hover:scale-110"
                                            width={1920}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="p-4 md:p-8">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="text-xs text-zinc-800">
                                                {featured.date ? (
                                                    <time
                                                        dateTime={new Date(
                                                            featured.date
                                                        ).toISOString()}
                                                    >
                                                        {Intl.DateTimeFormat(
                                                            undefined,
                                                            {
                                                                dateStyle:
                                                                    "medium",
                                                            }
                                                        ).format(
                                                            new Date(
                                                                featured.date
                                                            )
                                                        )}
                                                    </time>
                                                ) : (
                                                    <span>SOON</span>
                                                )}
                                            </div>
                                            <span className="flex items-center gap-1 text-xs text-zinc-500">
                                                <Eye className="w-4 h-4" /> 0
                                            </span>
                                        </div>

                                        <span
                                            id="featured-post"
                                            className="mt-4 text-3xl font-bold text-zinc-800 group-hover:text-black sm:text-4xl font-display link-underline"
                                        >
                                            {featured.title}
                                        </span>
                                        <p className="mt-4 leading-8 duration-150 text-zinc-700 group-hover:text-zinc-800">
                                            {featured.description}
                                        </p>
                                        <div className="absolute bottom-4 md:bottom-8">
                                            <p className="hidden text-zinc-700 hover:text-zinc-800 lg:block">
                                                Read more{" "}
                                                <span aria-hidden="true">
                                                    &rarr;
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </Card>
                    </div>
                    <div className="flex flex-row w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {[top2].map((project) => (
                            <Card key={project.slug}>
                                <Article project={project} views={0} />
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="hidden w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 0)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 1)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 2)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0} />
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
