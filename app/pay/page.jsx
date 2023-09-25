"use client";
import bKashLogo from "@/public/images/bkash.png";
import { Navigation } from "../components/nav";

import Link from "next/link";
// import { Payment } from "./bkash/page";

export default function PayPage() {
    return (
        <div className="h-screen">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                        Make Payment
                    </h2>
                </div>
            </div>
            <div className=" flex flex-col w-full h-auto justify-center items-center">
                <p>
                    Check out{" "}
                    <a href="#" className="link-animate">
                        the link
                        <svg className="underline" viewBox="0 0 70 36">
                            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        </svg>
                    </a>{" "}
                    here
                </p>
                <Link href="/pay/bkash">
                    <img
                        src={bKashLogo.src}
                        alt="bKash Payment"
                        className="w-36"
                    />
                </Link>
            </div>
        </div>
    );
}
