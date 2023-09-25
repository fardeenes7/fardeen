import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const temp = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/api/pay/bkash/token/grant",
        {
            method: "POST",
        }
    );
    const token = await temp.json();
    const url = process.env.NEXT_PUBLIC_BKASH_URL + "create";
    //generate random 8 digit alphanumeric string
    const merchantInvoiceNumber = Math.random().toString(36).slice(2, 10);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: "Bearer " + token.id_token,
            "X-APP-Key": process.env.NEXT_PUBLIC_BKASH_APP_KEY,
        },
        body: JSON.stringify({
            mode: "0011",
            payerReference: req.body.payerReference,
            callbackURL: process.env.NEXT_PUBLIC_HOST + "/pay/callback/",
            amount: req.body.amount,
            currency: "BDT",
            intent: "sale",
            merchantInvoiceNumber: merchantInvoiceNumber,
        }),
    });
    const data = await response.json();
    res.status(200).json({
        data: data,
        token: token,
    });
}
