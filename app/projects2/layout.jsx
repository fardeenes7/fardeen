export const metadata = {
    metadataBase: process.env.NEXT_PUBLIC_HOST,
    title: "Projects",
    openGraph: {
        title: "Projects | Fardeen Ehsan",
        description: "Projects by Fardeen Ehsan",
        url: "https://fardeenes.com",
        siteName: "Fardeen Ehsan",
        images: [
            {
                url: "/api/og?type=page&title=Projects",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        title: "Fardeen Ehsan",
        card: "summary_large_image",
    },
};

export default function ProjectsLayout({ children }) {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-100 via-slate-200/20 to-zinc-100 ">
            {children}
        </div>
    );
}
