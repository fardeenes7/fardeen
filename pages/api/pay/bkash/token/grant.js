import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const url = process.env.NEXT_PUBLIC_BKASH_URL + "token/grant";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            username: process.env.NEXT_PUBLIC_BKASH_USERNAME,
            password: process.env.NEXT_PUBLIC_BKASH_PASSWORD,
        },
        body: JSON.stringify({
            app_key: process.env.NEXT_PUBLIC_BKASH_APP_KEY,
            app_secret: process.env.NEXT_PUBLIC_BKASH_APP_SECRET,
        }),
    });
    const data = await response.json();
    res.status(200).json(data);
}
