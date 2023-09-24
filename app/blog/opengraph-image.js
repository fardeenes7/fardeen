import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default function Image() {
    // Font
    //   const interSemiBold = fetch(
    //     new URL('./Inter-SemiBold.ttf', import.meta.url)
    //   ).then((res) => res.arrayBuffer())
    const calsans = fetch(
        new URL("../../public/fonts/CalSans-SemiBold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Blog
            </div>
        ),
        // ImageResponse options
        {
            ...size,
            fonts: [
                {
                    name: "Cal Sans",
                    data: calsans,
                    style: "normal",
                    weight: 400,
                },
            ],
        }
    );
}
