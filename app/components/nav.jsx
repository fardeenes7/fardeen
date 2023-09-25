"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation = () => {
    const ref = useRef(null);
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
                <div className="max-w-7xl w-full text-sm font-bold container flex flex-row-reverse items-center px-6 justify-between mx-auto">
                    <div className="flex justify-between gap-8">
                        <Link
                            href="/projects"
                            className="duration-200 text-zinc-700 hover:text-zinc-600  px-2 py-6 link-underline"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            className="duration-200 text-zinc-700 hover:text-zinc-600 px-2 py-6 link-underline"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/pay"
                            className="duration-200 text-zinc-700 hover:text-zinc-600 px-2 py-6 link-underline"
                        >
                            Payment
                        </Link>

                        <Link
                            href="/contact"
                            className="duration-200 text-zinc-700 hover:text-zinc-600 px-2 py-6 link-underline"
                        >
                            Contact
                        </Link>
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
