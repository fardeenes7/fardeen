"use client";
import { useState, useEffect } from "react";

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
                console.log("payment");
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
            {loading ? <p>Loading...</p> : <p>Redirecting...</p>}
        </div>
    );
}
