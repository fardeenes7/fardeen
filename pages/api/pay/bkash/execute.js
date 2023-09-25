import { makeConsoleLogger } from "@notionhq/client/build/src/logging";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const token = req.body.id_token;
    const paymentID = req.body.paymentID;
    const url = process.env.NEXT_PUBLIC_BKASH_URL + "execute/";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "Bearer " + token,
            "X-APP-Key": process.env.NEXT_PUBLIC_BKASH_APP_KEY,
        },
        body: JSON.stringify({
            paymentID: paymentID,
        }),
    });
    const data = await response.json();
    console.log(data);
    res.status(200).json({});
}
