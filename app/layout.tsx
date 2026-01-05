import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
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
    title: {
        default: "fardiin.",
        template: "%s | fardiin.",
    },
    description: "Software Engineer",
    keywords: [
        "Fardeen",
        "Fardiin",
        "Fardeen Ahmed",
        "Software Engineer",
        "Full-Stack Developer",
        "Web Developer",
        "Portfolio",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Django",
        "Frontend Developer",
        "Backend Developer",
    ],
    authors: [{ name: "Fardeen Ehsan", url: "https://fardiin.com" }],
    creator: "Fardeen Ahmed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={dmSans.variable}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ProgressBarProvider>
                    <Header />
                    {children}
                </ProgressBarProvider>
            </body>
        </html>
    );
}
