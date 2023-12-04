import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import Image from "next/image";

type Props = {
    project: Project;
    views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
    return (
        <Link href={`/projects/${project.slug}`}>
            <article className="articleCard overflow-hidden group">
                <div className="h-auto overflow-hidden">
                    <Image
                        src={
                            project.image
                                ? project.image
                                : `/api/og?type=project&title=${project.title}`
                        }
                        alt={project.title}
                        className="w-full h-auto object-cover object-center rounded-t-lg group-hover:opacity-80 duration-1000 group-hover:scale-110"
                        width={1920}
                        height={1000}
                    />
                </div>
                <div className=" p-4 md:p-8">
                    <div className="flex justify-between gap-2 items-center">
                        <span className="text-xs duration-1000 text-zinc-800 group-hover:text-black group-hover:border-zinc-800 drop-shadow-orange">
                            {project.date ? (
                                <time
                                    dateTime={new Date(
                                        project.date
                                    ).toISOString()}
                                >
                                    {Intl.DateTimeFormat(undefined, {
                                        dateStyle: "medium",
                                    }).format(new Date(project.date))}
                                </time>
                            ) : (
                                <span>SOON</span>
                            )}
                        </span>
                        <span className="text-zinc-500 text-xs  flex items-center gap-1">
                            <Eye className="w-4 h-4" />{" "}
                            {Intl.NumberFormat("en-US", {
                                notation: "compact",
                            }).format(views)}
                        </span>
                    </div>
                    <span className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-800 group-hover:text-black font-display link-underline">
                        {project.title}
                    </span>
                    <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-700 group-hover:text-zinc-800">
                        {project.description}
                    </p>
                </div>
            </article>
        </Link>
    );
};
