"use client";
import { set } from "date-fns";
import { useState, useEffect } from "react";
import Loading from "@/app/components/loading";

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
            setLoading(false);
        };
        fetchPayment();
    }, []);

    return (
        <div className="flex flex-col w-full min-h-screen justify-center items-center">
            {loading ? <Loader /> : <StatusPage status={status} />}
        </div>
    );
}

function StatusPage({ status }) {
    if (status === "success") {
        return <Success />;
    } else if (status === "fail") {
        return <Fail />;
    } else {
        return <Loader />;
    }
}

function Loader() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <Loading />
            <h2 className="text-2xl font-display">Processing Payment</h2>
        </div>
    );
}

function Success() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <h2 className="text-2xl font-display">Payment Successful</h2>
        </div>
    );
}

function Fail() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-8">
            <h2 className="text-2xl font-display">Payment Failed</h2>
        </div>
    );
}
