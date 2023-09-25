import "./global.css";
import "./loading.css";

import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const metadata = {
    title: {
        default: "Fardeen Ehsan",
        template: "%s | Fardeen Ehsan",
    },
    description: "Software engineer",
    openGraph: {
        title: "Fardeen Ehsan",
        description: "Software engineer",
        url: "https://fardeen.app",
        siteName: "fardeen.app",
        images: [
            {
                url: "https://raw.githubusercontent.com/fardeenes7/fardeenes7/728cc75d59f8c271858828745d28cda24f13fbec/og.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Fardeen Ehsan",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/favicon.png",
    },
};

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    display: "swap",
    variable: "--font-calsans",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${calSans.variable}`}>
            <head></head>
            <body
                className={`bg-white ${
                    process.env.NODE_ENV === "development"
                        ? "debug-screens"
                        : undefined
                }`}
            >
                {children}
            </body>
        </html>
    );
}
