import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ProgressBarProvider from "@/providers/progress-bar-provider";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://fardiin.com"),
    title: {
        default: "Fardeen Ehsan | Software Engineer",
        template: "%s | Fardeen Ehsan",
    },
    description:
        "Software Engineer specializing in SaaS & System Architecture. Building scalable backend-heavy products with Django, DRF, Next.js, and cloud-native infrastructure.",
    keywords: [
        "Fardeen Ehsan",
        "Software Engineer",
        "SaaS Developer",
        "System Architecture",
        "Django Developer",
        "FastAPI",
        "Next.js Developer",
        "Full-Stack Engineer",
        "Backend Engineer",
        "PostgreSQL",
        "Docker",
        "Cloudflare",
        "ERP Systems",
        "Multi-tenant SaaS",
    ],
    authors: [{ name: "Fardeen Ehsan", url: "https://fardiin.com" }],
    creator: "Fardeen Ehsan",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://fardiin.com",
        title: "Fardeen Ehsan | Software Engineer",
        description:
            "Software Engineer specializing in SaaS & System Architecture",
        siteName: "Fardeen Ehsan",
        images: "/api/og",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fardeen Ehsan | Software Engineer",
        description:
            "Software Engineer specializing in SaaS & System Architecture",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${dmSans.variable}`}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ProgressBarProvider>
                    <Header />
                    {children}
                    <Footer />
                </ProgressBarProvider>
            </body>
        </html>
    );
}
