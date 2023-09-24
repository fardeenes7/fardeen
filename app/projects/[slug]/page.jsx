import Head from "next/head";
import Link from "next/link";
import { Header } from "./header";
import { ReportView } from "./view";
import { Article } from "./Article";

async function getPage(slug) {
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
                and: [
                    {
                        property: "Status",
                        status: {
                            equals: "Published",
                        },
                    },
                    {
                        property: "Slug",
                        rich_text: {
                            equals: slug,
                        },
                    },
                ],
            },
        }),
    });
    const data = await res.json();
    return {
        id: data.results[0].id,
        title: data.results[0].properties.Title.title[0].plain_text,
        date: data.results[0].properties.Date.date.start,
        description:
            data.results[0].properties.Description.rich_text[0].plain_text,
        github: data.results[0].properties.Github
            ? data.results[0].properties.Github.rich_text[0].href
            : "https://github.com/fardeenes7",
        live: data.results[0].properties.Live
            ? data.results[0].properties.Live.rich_text[0].href
            : undefined,
    };
}

async function getData(slug) {
    const page = await getPage(slug);
    console.log(page);
    const url = "https://api.notion.com/v1/blocks/" + page.id + "/children";
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Notion-Version": "2022-02-22",
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_NOTION_TOKEN,
        },
    });
    const data = await res.json();
    return {
        title: page.title,
        date: page.date,
        description: page.description,
        body: data.results,
        github: page.github,
        live: page.live,
    };
}

export default async function PostPage({ params }) {
    const slug = params?.slug;
    const project = await getData(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-zinc-50 min-h-screen">
            <Header project={project} views="0" />
            {/* <ReportView slug={project.slug} /> */}

            <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
                {/* run a loop */}
                {project.body.map((block, idx) => {
                    return <Article key={idx} block={block} />;
                })}
            </article>
        </div>
    );
}
