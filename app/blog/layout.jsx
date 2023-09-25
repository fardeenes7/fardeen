export const metadata = {
    metadataBase: process.env.NEXT_PUBLIC_HOST,
    title: "Blog",
    openGraph: {
        title: "Blog | Fardeen Ehsan",
        description: "Blog by Fardeen Ehsan",
        url: "https://fardeenes.com",
        siteName: "Fardeen Ehsan",
        images: [
            {
                url: "/api/og?type=page&title=Blog",
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

export default function BlogLayout({ children }) {
    return <div className="relative min-h-screen  ">{children}</div>;
}
