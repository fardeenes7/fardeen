import { ExternalLink } from "lucide-react";
export const Article = ({ block }) => {
    if (block.type === "paragraph") {
        return (
            <p>
                {block.paragraph.rich_text.map((text, idx) => {
                    if (text.href != null) {
                        return (
                            <a
                                className="link-animate"
                                href={text.href}
                                target="_blank"
                                key={idx}
                            >
                                <span className="flex items-center gap-1">
                                    {text.text.content}{" "}
                                    <ExternalLink size={14} />
                                </span>
                                <svg className="underline" viewBox="0 0 70 36">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </a>
                        );
                    } else {
                        return (
                            <span
                                className={`${
                                    text.annotations.bold === true &&
                                    "font-bold"
                                }
                            ${
                                text.annotations.underline === true &&
                                "underline"
                            }
                            ${text.annotations.italic === true && "text-italic"}
                            ${
                                text.annotations.strikethrough === true &&
                                "line-through"
                            }
                            text-${text.annotations.color}-700
                            `}
                                key={idx}
                            >
                                {text.text.content}
                            </span>
                        );
                    }
                })}
            </p>
        );
    }
    if (block.type === "heading_1") {
        return (
            <h1>
                {block.heading_1.rich_text.map((text, idx) => {
                    return <span key={idx}>{text.text.content}</span>;
                })}
            </h1>
        );
    }
    if (block.type === "heading_2") {
        return (
            <h2>
                {block.heading_2.rich_text.map((text, idx) => {
                    return <span key={idx}>{text.text.content}</span>;
                })}
            </h2>
        );
    }
    if (block.type === "heading_3") {
        return (
            <h3>
                {block.heading_3.rich_text.map((text, idx) => {
                    return <span key={idx}>{text.text.content}</span>;
                })}
            </h3>
        );
    }

    if (block.type === "bulleted_list_item") {
        return (
            <ul>
                <li>
                    {block.bulleted_list_item.rich_text.map((text, idx) => {
                        return <span key={idx}>{text.text.content}</span>;
                    })}
                </li>
            </ul>
        );
    }

    if (block.type === "numbered_list_item") {
        return (
            <ol>
                <li>
                    {block.numbered_list_item.rich_text.map((text, idx) => {
                        return <span key={idx}>{text.text.content}</span>;
                    })}
                </li>
            </ol>
        );
    }

    if (block.type === "code") {
        return (
            <div>
                <pre>
                    {block.code.rich_text.map((text, idx) => {
                        return <code key={idx}>{text.text.content}</code>;
                    })}
                </pre>
            </div>
        );
    }
    if (block.type === "image") {
        if (block.image.type === "external") {
            return <Image block={block} src={block.image.external.url} />;
        } else if (block.image.type === "file") {
            return <Image block={block} src={block.image.file.url} />;
        }
    }
};

const Image = ({ block, src }) => {
    return <img className="rounded-xl" src={src} alt="image" />;
};
