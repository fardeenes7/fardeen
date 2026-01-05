import { Resend } from "resend";
import socials from "@/data/socials.json";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) {
    await resend.emails.send({
        from: "Portfolio Contact <noreply@fardiin.qzz.io>",
        to: [socials.email],
        subject: `New Message from ${name}`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
                    ${message.replace(/\n/g, "<br>")}
                </div>
            </div>
        `,
    });
}
