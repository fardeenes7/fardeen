"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "./logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";

export const navLinks = [
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "About",
        href: "/about",
    },
    
    {
        label: "Contact",
        href: "/contact",
    },
];

export function Header() {
    const scrolled = useScroll(10);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full border-transparent border-b",
                {
                    "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
                        scrolled,
                }
            )}
        >
            <nav
                className={cn(
                    "mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4"
                )}
            >
                <Link href="/">
                    <Logo className="h-4.5" />
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link, i) => (
                        <a
                            className={buttonVariants({ variant: "ghost" })}
                            href={link.href}
                            key={i}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <MobileNav />
            </nav>
        </header>
    );
}
