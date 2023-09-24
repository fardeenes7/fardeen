async function getData() {
    const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
    const response = await notion.databases.query({
        database_id: "fef61c124cbb40c39b4755c10f401101",
        filter: {
            property: "Status",
            status: {
                equals: "Published",
            },
        },
    });
    console.log(response);
    return response;
}

export default function handler(req, res) {
    const response = getData();
    res.status(200).json(response);
}
