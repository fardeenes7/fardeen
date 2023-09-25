"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const items = [
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Payment",
        href: "/pay",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export const Navigation = () => {
    const ref = useRef(null);
    const [selected, setSelected] = useState(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500  border-zinc-800 "
                }`}
            >
                <div className="max-w-7xl w-full text-sm font-bold container flex flex-row-reverse items-center py-4 justify-between mx-auto">
                    <div
                        className="flex justify-between gap-6"
                        onMouseLeave={() => setSelected(null)}
                    >
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onMouseEnter={() => setSelected(item)}
                                className="relative duration-200 text-zinc-700 hover:text-zinc-600  px-4 py-2 "
                            >
                                <motion.span
                                    className="relative z-10 font-display"
                                    animate={{
                                        color:
                                            item === selected ? "#fff" : "#000",
                                    }}
                                >
                                    {item.name}
                                </motion.span>
                                {item === selected && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute top-0 left-0 h-full w-full bg-emerald-500  rounded-xl z-[1]"
                                        transition={{
                                            type: "spring",
                                            bounce: 0.25,
                                            duration: 0.5,
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/"
                        className="duration-200 text-zinc-900 hover:text-zinc-700"
                    ></Link>

                    <Link
                        href="/"
                        className="duration-200 text-zinc-900 hover:text-zinc-700 font-display text-3xl"
                    >
                        fardeen.
                    </Link>
                </div>
            </div>
        </header>
    );
};
