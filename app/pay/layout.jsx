export const metadata = {
    metadataBase: process.env.NEXT_PUBLIC_HOST,
    title: "Payment",
    openGraph: {
        title: "Payment | Fardeen Ehsan",
        description: "Pay to Fardeen Ehsan",
        url: "https://fardeenes.com",
        siteName: "Fardeen Ehsan",
        images: [
            {
                url: "/api/og?type=page&title=Payment",
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

export default function PaymentLayout({ children }) {
    return <div>{children}</div>;
}
