"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

async function getData() {
    const url =
        "https://api.notion.com/v1/databases/fef61c124cbb40c39b4755c10f401101/query";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Notion-Version": "2022-02-22",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_NOTION_TOKEN,
        },
        body: JSON.stringify({
            filter: {
                property: "Status",
                status: {
                    equals: "Published",
                },
            },
            sorts: [
                {
                    property: "Date",
                    direction: "ascending",
                },
            ],
        }),
    });
    const data = await res.json();
    return data;
}

export const revalidate = 60;
export default async function ProjectsPage() {
    const data = await getData();
    const allProjects = data.results;
    const featured = allProjects.find(
        (project) =>
            project.properties.Rank.select &&
            project.properties.Rank.select.name === "Featured"
    );
    const top2 = allProjects.find(
        (project) =>
            project.properties.Rank.select &&
            project.properties.Rank.select.name === "First"
    );
    const top3 = allProjects.find(
        (project) =>
            project.properties.Rank.select &&
            project.properties.Rank.select.name === "Second"
    );

    const sorted = allProjects
        .filter((p) => p.properties.Status.status.name === "Published")
        .filter(
            (project) =>
                project.properties.Slug.rich_text[0].plain_text !==
                    featured.properties.Slug.rich_text[0].plain_text &&
                project.properties.Slug.rich_text[0].plain_text !==
                    top2.properties.Slug.rich_text[0].plain_text &&
                project.properties.Slug.rich_text[0].plain_text !==
                    top3.properties.Slug.rich_text[0].plain_text
        )
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        );

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-700">
                        Some of the projects are from work and some are on my
                        own time.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link
                            href={`/projects/${featured.properties.Slug.rich_text[0].plain_text}`}
                        >
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-800">
                                        {featured.properties.Date.date.start ? (
                                            <time
                                                dateTime={new Date(
                                                    featured.properties.Date.date.start
                                                ).toISOString()}
                                            >
                                                {Intl.DateTimeFormat(
                                                    undefined,
                                                    {
                                                        dateStyle: "medium",
                                                    }
                                                ).format(
                                                    new Date(
                                                        featured.properties.Date.date.start
                                                    )
                                                )}
                                            </time>
                                        ) : (
                                            <span>SOON</span>
                                        )}
                                    </div>
                                </div>

                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-800 group-hover:text-black sm:text-4xl font-display"
                                >
                                    {
                                        featured.properties.Title.title[0]
                                            .plain_text
                                    }
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-700 group-hover:text-zinc-800">
                                    {featured.properties.Description
                                        .rich_text[0]
                                        ? featured.properties.Description
                                              .rich_text[0].plain_text
                                        : ""}
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-zinc-700 hover:text-zinc-800 lg:block">
                                        Read more{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {[top2, top3].map((project) => (
                            <Card key={project.slug}>
                                <Article project={project} />
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
                                <Card key={project.id}>
                                    <Article project={project} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 1)
                            .map((project) => (
                                <Card key={project.id}>
                                    <Article project={project} />
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 2)
                            .map((project) => (
                                <Card key={project.id}>
                                    <Article project={project} />
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
