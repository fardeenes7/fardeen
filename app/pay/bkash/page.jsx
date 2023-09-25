"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/components/loading";

const handlePayment = async () => {
    const res = await fetch("/api/pay/bkash/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    return data;
};

export default function Payment() {
    const [loading, setLoading] = useState(true);
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        const fetchPayment = async () => {
            const paymentData = await handlePayment();
            setPayment(paymentData);
            if (paymentData) {
                setLoading(false);
                localStorage.setItem(
                    "bkash_id_token",
                    paymentData.token.id_token
                );
                localStorage.setItem(
                    "bkash_refresh_token",
                    paymentData.token.refresh_token
                );
                window.location.href = paymentData.data.bkashURL;
            }
        };
        fetchPayment();
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center">
            {loading ? <Loader /> : <Redirect />}
        </div>
    );
}

function Loader() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <Loading />
            <h2 className="text-2xl font-display">Loading Gateway</h2>
        </div>
    );
}

function Redirect() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <Loading />
            <h2 className="text-2xl font-display">Redirecting to bKash</h2>
        </div>
    );
}
