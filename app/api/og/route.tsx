import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
    try {
        //construct base url with scheme
        const { origin } = new URL(request.url);
        console.log(origin);
        const { searchParams } = new URL(request.url);

        const title = searchParams.get("title") || "fardiin.";
        const description = searchParams.get("description");

        let calSansFont;
        try {
            calSansFont = await fetch(
                new URL(
                    "../../../public/fonts/CalSans-Regular.ttf",
                    import.meta.url
                )
            ).then((res) => res.arrayBuffer());
        } catch (error) {
            console.log(
                "Failed to load Cal Sans font, using system font fallback"
            );
            calSansFont = null;
        }

        const grainPattern = Array.from({ length: 200 }, (_, i) => ({
            x: Math.random() * 1200,
            y: Math.random() * 630,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
        }));

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#000",
                        position: "relative",
                    }}
                >
                    {grainPattern.map((grain, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                left: `${grain.x}px`,
                                top: `${grain.y}px`,
                                width: `${grain.size}px`,
                                height: `${grain.size}px`,
                                borderRadius: "50%",
                                backgroundColor: "#b6b6b6",
                                opacity: grain.opacity,
                            }}
                        />
                    ))}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-end",
                            padding: "80px",
                            maxWidth: "1000px",
                            position: "relative",
                            zIndex: 1,
                            gap: "24px",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: calSansFont
                                    ? "Cal Sans"
                                    : "system-ui, sans-serif",
                                fontSize: 150,
                                fontWeight: 700,
                                background:
                                    "linear-gradient(to right, #ffffff, #a1a1aa)",
                                backgroundClip: "text",
                                color: "transparent",
                                textAlign: "center",
                                lineHeight: 1.2,
                            }}
                        >
                            {title}
                        </div>
                        {description && (
                            <div
                                style={{
                                    fontSize: 32,
                                    color: "#a1a1aa",
                                    textAlign: "center",
                                    maxWidth: "800px",
                                    lineHeight: 1.4,
                                }}
                            >
                                {description}
                            </div>
                        )}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                ...(calSansFont && {
                    fonts: [
                        {
                            name: "Cal Sans",
                            data: calSansFont,
                            style: "normal",
                            weight: 600,
                        },
                    ],
                }),
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
