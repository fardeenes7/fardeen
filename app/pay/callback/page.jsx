"use client";
import { set } from "date-fns";
import { useState, useEffect } from "react";
import Loading from "@/app/components/loading";
import { Navigation } from "@/app/components/nav";
import bkashlogo from "@/public/images/bkash.png";
import Image from "next/image";

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
    if (data.statusCode) {
        return data;
    } else {
        return {
            statusCode: "error",
        };
    }

    return data;
    // return {
    //     statusCode: "0000",
    //     statusMessage: "Successful",
    //     paymentID: "TR0011CxguOdm1695668276108",
    //     payerReference: "Fardeen for null",
    //     customerMsisdn: "01619777282",
    //     trxID: "AIQ50E0UBF",
    //     amount: "1015",
    //     transactionStatus: "Completed",
    //     paymentExecuteTime: "2023-09-26T00:59:29:399 GMT+0600",
    //     currency: "BDT",
    //     intent: "sale",
    //     merchantInvoiceNumber: "3ckq0w8w",
    // };

    //     {
    //   statusCode: '2062',
    //   statusMessage: 'The payment has already been completed'
    // }
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
        <div className="">
            <Navigation />{" "}
            {loading ? <Loader /> : <StatusPage status={status} data={data} />}
            {/* <Success /> */}
        </div>
    );
}

function StatusPage({ status, data }) {
    if (data.statusCode === "2062") {
        return <Completed />;
    } else if (data.statusCode === "0000") {
        return <Success data={data} />;
    } else if (status === "fail") {
        return <Fail />;
    } else {
        return <CoudntLoad />;
    }
}

function Loader() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
            <Loading />
            <h2 className="text-2xl font-display">Processing Payment</h2>
        </div>
    );
}

function CoudntLoad() {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="px-6  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                        Something went wrong
                    </h2>
                </div>
            </div>
            <div>
                <p className="mt-16 text-center text-zinc-700">
                    Couldn&#39;t load payment information.
                </p>
            </div>
        </div>
    );
}

function Success({ data }) {
    const regex = /([^ ]+) for ([^ ]+)/; // Regular expression to match "word for word"
    const match = data.payerReference?.match(regex);

    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="px-6  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                        Payment Successful
                    </h2>
                </div>
            </div>
            <section
                aria-labelledby="summary-heading"
                className="mt-16 w-full px-6"
            >
                <h2 id="summary-heading" className="sr-only">
                    Payment Summary
                </h2>

                <div className="bg-green-50 border border-green-500 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                        <div>
                            <dt className="font-medium text-gray-900">
                                Payment Details
                            </dt>
                            <dd className="mt-3 text-gray-500">
                                <span className="block">Paid By</span>
                                <span className="block font-bold">
                                    {match?.[1] ?? "Anonymous"}
                                </span>

                                <span className="block mt-2">Reason</span>
                                <span className="block font-bold">
                                    {match?.[2] ?? "null"}
                                </span>

                                <span className="block mt-2">
                                    Transaction ID
                                </span>
                                <span className="block font-bold">
                                    {data.trxID}
                                </span>
                            </dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">
                                Payment information
                            </dt>
                            <div className="mt-3">
                                <dd className="-ml-4 -mt-4 flex flex-wrap">
                                    <div className="ml-4 mt-4 flex-shrink-0">
                                        <Image
                                            src={bkashlogo.src}
                                            className="w-9"
                                            alt=""
                                        />
                                        <p className="sr-only">bKash</p>
                                    </div>
                                    <div className="ml-4 mt-4">
                                        <p className="text-gray-600">bkash</p>
                                        <p className="text-gray-900">
                                            {data.customerMsisdn}
                                        </p>
                                    </div>
                                </dd>
                            </div>
                        </div>
                    </dl>

                    <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                        <div className="pb-4 flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">
                                {data.amount - (data.amount / 1.015) * 0.015}
                            </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Charge</dt>
                            <dd className="font-medium text-gray-900">
                                {parseInt((data.amount / 1.015) * 0.015)}
                            </dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Tax</dt>
                            <dd className="font-medium text-gray-900">0</dd>
                        </div>
                        <div className="pt-4 flex items-center justify-between">
                            <dt className="font-medium text-gray-900">
                                Order total
                            </dt>
                            <dd className="font-medium text-indigo-600">
                                {data.amount}
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
}

function Completed() {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div className="px-6  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-8 pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                        Something went wrong
                    </h2>
                </div>
            </div>
            <div>
                <p className="mt-16 text-center text-zinc-700">
                    Payment has already been completed.
                </p>
            </div>
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
