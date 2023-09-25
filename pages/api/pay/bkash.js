import { NextResponse } from "next/server";

export default async function handler(req, res) {
    

    res.status(200).json({
        data: data,
        token: token,
    });
}
