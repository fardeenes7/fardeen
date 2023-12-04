"use client";
import { BarChart, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { ModeToggle } from "@/app/components/mode-toggle";

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
    const [open, setOpen] = useState(null);
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
                <div className="flex max-w-7xl w-full text-sm font-bold container flex-row-reverse items-center justify-between mx-auto">
                    <div
                        className="hidden md:flex justify-between gap-6"
                        onMouseLeave={() => setSelected(null)}
                    >
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onMouseEnter={() => setSelected(item)}
                                className="relative duration-200 text-zinc-700 hover:text-zinc-500 px-4 py-6 "
                            >
                                <span className="relative z-10 font-display">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                        <div className="my-auto">
                            <ModeToggle />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="md:hidden duration-200 text-zinc-900 hover:text-zinc-700  py-6"
                    >
                        <motion.div
                            layoutId="mobileMenuButton"
                            transition={{ duration: 0.25 }}
                        >
                            <Menu />
                        </motion.div>
                    </button>
                    <motion.div
                        layoutId="sitename"
                        transition={{ duration: 0.25 }}
                    >
                        <Link
                            href="/"
                            className="duration-200 text-zinc-900 hover:text-zinc-700 font-display text-3xl"
                        >
                            fardeen.
                        </Link>
                    </motion.div>
                </div>
            </div>
            {open && (
                <motion.div
                    initial={{ y: 0, opacity: 0, scale: 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 0, opacity: 0, scale: 1, duration: 0.2 }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="z-[60] fixed inset-x-0 top-0 left-0  h-screen w-full transition-all duration-300 text-sm font-bold bg-slate-800 text-white"
                >
                    <div className="  w-full flex flex-row-reverse items-center justify-between px-12">
                        <div className="flex md:hidden justify-between gap-6">
                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="duration-200 text-zinc-200 hover:text-zinc-300  py-16"
                            >
                                <motion.div
                                    layoutId="mobileMenuButton"
                                    transition={{ duration: 0.25 }}
                                >
                                    <BarChart
                                        className={`${open && "-rotate-90"}`}
                                    />
                                </motion.div>
                            </button>
                        </div>
                        <motion.div
                            layoutId="sitename"
                            transition={{ duration: 0.25 }}
                        >
                            <Link
                                href="/"
                                className="duration-200 text-zinc-200 hover:text-zinc-300 font-display text-3xl"
                            >
                                fardeen.
                            </Link>
                        </motion.div>
                    </div>
                    <div
                        className="flex flex-col sm:hidden justify-between  divide-y- divide-white"
                        onMouseLeave={() => setSelected(null)}
                    >
                        {items.map((item, idx) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onMouseEnter={() => setSelected(item)}
                                className="relative duration-200 text-zinc-100 hover:text-zinc-300 px-12 py-6 text-lg"
                            >
                                <motion.div
                                    initial={{ x: -50 * (idx + 1) }}
                                    transition={{ duration: 0.1 * (idx + 1) }}
                                    animate={{ x: 0 }}
                                >
                                    <span className="relative z-10 font-display">
                                        {item.name}
                                    </span>
                                </motion.div>
                                {item === selected && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute top-0 left-0 h-full border-t-2 border-b-2 border-white w-full bg-transparent z-[60]  sm:z-[1]"
                                        transition={{
                                            type: "spring",
                                            bounce: 0.25,
                                            duration: 0.5,
                                        }}
                                        animate={{
                                            width: "100%",
                                            from: "0%",
                                        }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};
