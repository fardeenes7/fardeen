import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

const font = fetch(
    new URL("../../public/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req) {
    const fontData = await font;
    const { searchParams } = req.nextUrl;

    const type = searchParams.get("type") ? searchParams.get("type") : "base";
    if (type == "base") {
        return og(base());
    } else if (type == "page") {
        const title = searchParams.get("title")
            ? searchParams.get("title")
            : "Fardeen";
        return og(page(title));
    } else if (type == "project") {
        const title = searchParams.get("title")
            ? searchParams.get("title")
            : "Fardeen";
        return og(project(title));
    } else if (type == "test") {
        const title = searchParams.get("title")
            ? searchParams.get("title")
            : "Fardeen";
        return og(test(title));
    }
}

function base() {
    return (
        <div
            style={{
                backgroundColor: "white",
                backgroundImage:
                    "linear-gradient(to top left , #ffffff, rgb(52, 211, 153, 0.3), #ffffff)",
                height: "100%",
                width: "100%",
                fontSize: 180,
                fontFamily: "CalSans-SemiBold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
            }}
        >
            Fardeen
        </div>
    );
}

function page(title) {
    return (
        <div
            style={{
                backgroundColor: "white",
                backgroundImage:
                    "linear-gradient(to top left , #ffffff, rgb(52, 211, 153, 0.3), #ffffff)",
                height: "100%",
                width: "100%",
                fontSize: 150,
                fontFamily: "CalSans-SemiBold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
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
                <div style={{ fontSize: 50 }}>Fardeen Ehsan</div>
            </div>
        </div>
    );
}

function project(title) {
    return (
        <div
            style={{
                backgroundColor: "white",
                backgroundImage:
                    "linear-gradient(to top left , #ffffff, rgb(52, 211, 153, 0.3), #ffffff)",
                height: "100%",
                width: "100%",
                fontSize: 90,
                fontFamily: "CalSans-SemiBold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: "75%",
                }}
            >
                <div>{title}</div>
                <div
                    style={{
                        fontSize: 40,
                        marginTop: "20px",
                    }}
                >
                    Fardeen Ehsan
                </div>
            </div>
        </div>
    );
}
function test(title) {
    return (
        <div
            style={{
                backgroundColor: "white",
                backgroundImage:
                    "linear-gradient(to top left , #ffffff, rgb(52, 211, 153, 0.3), #ffffff)",
                height: "100%",
                width: "100%",
                fontSize: 180,
                fontFamily: "CalSans-SemiBold",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
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
                <div
                    style={{
                        fontSize: 40,
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    Fardeen Ehsan
                </div>
            </div>
        </div>
    );
}

async function og(div) {
    const fontData = await font;
    return new ImageResponse(div, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: "CalSans-SemiBold",
                data: fontData,
                style: "normal",
            },
        ],
    });
}
