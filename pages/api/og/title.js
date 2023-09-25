import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

const font = fetch(
    new URL("../../../public/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req) {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title")
        ? searchParams.get("title")
        : "Fardeen";

    const fontData = await font;

    return new ImageResponse(
        (
            <div
                style={{
                    backgroundColor: "black",
                    height: "100%",
                    width: "100%",
                    fontSize: 150,
                    fontFamily: "CalSans-SemiBold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}
                >
                    <div>{title}</div>
                    <div style={{ fontSize: 50 }}>
                        {process.env.NEXT_PUBLIC_HOST}
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "CalSans-SemiBold",
                    data: fontData,
                    style: "normal",
                },
            ],
        }
    );
}
