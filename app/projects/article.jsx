import Link from "next/link";
import { Eye } from "lucide-react";

export const Article = ({ project, views }) => {
    return (
        <Link
            href={`/projects/${project.properties.Slug.rich_text[0].plain_text}`}
        >
            <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-800 group-hover:text-black group-hover:border-zinc-800 drop-shadow-orange">
                        {project.created_time ? (
                            <time
                                dateTime={new Date(
                                    project.created_time
                                ).toISOString()}
                            >
                                {Intl.DateTimeFormat(undefined, {
                                    dateStyle: "medium",
                                }).format(new Date(project.created_time))}
                            </time>
                        ) : (
                            <span>SOON</span>
                        )}
                    </span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-800 group-hover:text-black font-display">
                    {project.properties.Title.title[0].plain_text}
                </h2>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-700 group-hover:text-zinc-800">
                    {project.properties.Description.rich_text[0]
                        ? project.properties.Description.rich_text[0].plain_text
                        : ""}
                </p>
            </article>
        </Link>
    );
};
