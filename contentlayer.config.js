import { makeSource, defineDatabase } from "contentlayer-source-notion";
import * as notion from "@notionhq/client";

const client = new notion.Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const Project = defineDatabase(() => ({
    name: "Project",
    databaseId: "fef61c124cbb40c39b4755c10f401101",
    query: {
        filter: {
            property: "Status",
            status: {
                equals: "Published",
            },
        },
    },
    properties: {
        // date: {
        //     name: "Date",
        // },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (project) => `/posts/${project._id}`,
        },
    },
}));

export default makeSource({
    client,
    databaseTypes: [Project],
});
