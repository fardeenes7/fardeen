"use client";

import { Button } from "@/components/ui/button";
import {
    IconMail,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandTwitter,
    IconArrowRight,
} from "@tabler/icons-react";

import { useState, useRef } from "react";
import { handleContactForm } from "@/app/actions/contact";
import socials from "@/data/socials.json";

export default function ContactPage() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        setError(null);
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const result = await handleContactForm(formData);

        setIsPending(false);

        if (result.error) {
            setError(result.error);
        } else {
            setSuccess(true);
            formRef.current?.reset();
        }
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            <header className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Get in Touch
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                    Have a project in mind or just want to chat about software
                    engineering? I'm always open to new opportunities and
                    collaborations.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div className="p-8 rounded-3xl border border-border bg-card">
                        <h2 className="text-xl font-bold mb-6">
                            Contact Details
                        </h2>
                        <div className="space-y-6">
                            <a
                                href={`mailto:${socials.email}`}
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <IconMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Email
                                    </p>
                                    <p className="font-semibold">
                                        {socials.email}
                                    </p>
                                </div>
                            </a>
                            <a
                                href={socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <IconBrandLinkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        LinkedIn
                                    </p>
                                    <p className="font-semibold">
                                        {socials.linkedin.replace(
                                            "https://",
                                            ""
                                        )}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-border bg-card">
                        <h2 className="text-xl font-bold mb-6">Socials</h2>
                        <div className="flex gap-4">
                            <a
                                href={socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <IconBrandGithub className="w-6 h-6" />
                            </a>
                            <a
                                href={socials.x}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <IconBrandTwitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-muted/50 rounded-3xl p-8 border border-border">
                    <h2 className="text-xl font-bold mb-6">Send a Message</h2>
                    <form
                        ref={formRef}
                        className="space-y-4"
                        onSubmit={onSubmit}
                    >
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-destructive font-medium">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="text-sm text-primary font-medium">
                                Message sent successfully! I'll get back to you
                                soon.
                            </p>
                        )}

                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full h-12 rounded-xl text-base font-bold gap-2"
                        >
                            {isPending ? "Sending..." : "Send Message"}
                            {!isPending && (
                                <IconArrowRight className="w-5 h-5" />
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
