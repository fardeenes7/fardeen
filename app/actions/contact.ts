"use server";

import { sendEmail } from "@/lib/mail";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function handleContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const validated = contactSchema.safeParse({ name, email, message });

    if (!validated.success) {
        return {
            error: validated.error.issues[0].message,
        };
    }

    try {
        await sendEmail({ name, email, message });
        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { error: "Failed to send message. Please try again later." };
    }
}
