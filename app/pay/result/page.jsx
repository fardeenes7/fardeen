"use client";
import { set } from "date-fns";
import { useState, useEffect } from "react";

const executePayment = async (paymentID, id_token) => {
    const res = await fetch("/api/pay/bkash/execute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            paymentID: paymentID,
            id_token: id_token,
        }),
    });
    const data = await res.json();
    return data;
};

export default function DonePayment() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    useEffect(() => {
        const fetchPayment = async () => {
            const paymentData = await executePayment(
                new URLSearchParams(window.location.search).get("paymentID"),
                localStorage.getItem("bkash_id_token")
            );
            setData(paymentData);
            setStatus(
                new URLSearchParams(window.location.search).get("status")
            );
            console.log(paymentData);
        };
        fetchPayment();
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center">
            <p>Payment {status}</p>
        </div>
    );
}
