"use client";
import bKashLogo from "@/public/images/bkash.png";
import Link from "next/link";
// import { Payment } from "./bkash/page";

export default function PayPage() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center">
            <Link href="/pay/bkash">
                <img src={bKashLogo.src} alt="bKash Payment" className="w-36" />
            </Link>
        </div>
    );
}
