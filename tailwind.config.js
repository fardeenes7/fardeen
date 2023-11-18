/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
                // "gradient-conic":
                //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {
                            content: '""',
                        },
                        "code::after": {
                            content: '""',
                        },
                    },
                },
                quoteless: {
                    css: {
                        "blockquote p:first-of-type::before": {
                            content: "none",
                        },
                        "blockquote p:first-of-type::after": {
                            content: "none",
                        },
                    },
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                display: ["var(--font-calsans)"],
            },
            animation: {
                "fade-in": "fade-in 1s ease-in-out forwards",
                title: "title 3s ease-out forwards",
                "fade-left": "fade-left 1s ease-in-out forwards",
                "fade-right": "fade-right 1s ease-in-out forwards",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                underline: "underline 0.4s ease-out forwards",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0%",
                    },
                    "75%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                "fade-left": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
                "fade-right": {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
                title: {
                    "0%": {
                        "line-height": "0%",
                        "letter-spacing": "0.25em",
                        opacity: "0",
                    },
                    "25%": {
                        "line-height": "0%",
                        opacity: "0%",
                    },
                    "80%": {
                        opacity: "100%",
                    },

                    "100%": {
                        "line-height": "100%",
                        opacity: "100%",
                    },
                },
                underline: {
                    "0%": {
                        "border-b": "0%",
                    },
                    "25%": {
                        "border-bottom-width": "25%",
                    },
                    "50%": {
                        "border-bottom-width": "50%",
                    },
                    "100%": {
                        "border-bottom-width": "100%",
                    },
                },

                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: { height: 0 },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwindcss-animate"),
        require("@tailwindcss/forms"),
    ],
};
