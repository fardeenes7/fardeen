import "@/public/css/global.css";
import "@/public/css/loading.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { ThemeProvider } from "@/app/components/theme-provider";

export const metadata = {
    metadataBase: "https://fardiin.com",
    title: {
        default: "Fardeen Ehsan",
        template: "%s | Fardeen Ehsan",
    },
    description: "Software engineer",
    openGraph: {
        title: "Fardeen Ehsan",
        description: "Software engineer",
        url: "https://fardiin.com",
        siteName: "Fardeen Ehsan",
        images: [
            {
                url: "/api/og",
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
        shortcut: "/favicon.ico",
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
            <body
                className={`bg-white dark:bg-black ${
                    process.env.NODE_ENV === "development"
                        ? "debug-screens"
                        : undefined
                }`}
            >
                {" "}
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
