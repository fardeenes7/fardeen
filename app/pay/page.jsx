"use client";
import bKashLogo from "@/public/images/bkash.png";
import { Navigation } from "../components/nav";
import bkashPayment from "./bkash";

import Link from "next/link";

import { Fragment, useState } from "react";
import {
    Dialog,
    Popover,
    RadioGroup,
    Tab,
    Transition,
} from "@headlessui/react";
import { CheckIcon, TrashIcon, CheckCircleIcon } from "lucide-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const paymentMethods = [
    {
        id: 1,
        title: "bKash",
        href: "bkash",
        logo: "https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon.png",
        charge: 1.5,
    },
];

export default function PayPage() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: null,
        email: null,
        paymentfor: null,
        amount: 0,
        charge: 0,
        total: 0,
    });
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (e.target.name === "amount") {
            setForm({
                ...form,
                amount: e.target.value,
                charge: (e.target.value * paymentMethod.charge) / 100,
                total:
                    (parseInt(e.target.value) * paymentMethod.charge) / 100 +
                    parseInt(e.target.value),
            });
        }
        console.log(form);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        document.getElementById("paymentButton").disabled = true;
        document.getElementById("paymentButtonText").innerHTML =
            "Processing...";
        if (paymentMethod.href === "bkash") {
            const res = await fetch("/api/pay/bkash/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    payerReference: form.name + " for " + form.paymentfor,
                    amount: form.total,
                }),
            });
            const paymentData = await res.json();
            if (paymentData) {
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
        }
    };

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

            <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h1 className="sr-only">Checkout</h1>

                    <form
                        onSubmit={(e) => handleFormSubmit(e)}
                        className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
                        method="POST"
                    >
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">
                                Contact information
                            </h2>
                            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div className="mt-4 col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="you@gmail.com"
                                            onChange={(e) => handleChange(e)}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Your Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            autoComplete="given-name"
                                            placeholder="John Doe"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="paymentfor"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Payment For
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="paymentfor"
                                            id="paymentfor"
                                            placeholder="Project/Personal"
                                            onChange={(e) => handleChange(e)}
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="paymentfor"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Amount
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="amount"
                                            id="amount"
                                            placeholder="1000"
                                            min="1"
                                            max="25000"
                                            title="Amount should be between 1 and 25000"
                                            onChange={(e) => handleChange(e)}
                                            required
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <RadioGroup
                                    value={paymentMethod}
                                    onChange={setPaymentMethod}
                                >
                                    <RadioGroup.Label className="text-lg font-medium text-gray-900">
                                        Payment Method
                                    </RadioGroup.Label>

                                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                        {paymentMethods.map((paymentMethod) => (
                                            <RadioGroup.Option
                                                key={paymentMethod.id}
                                                value={paymentMethod}
                                                className={({
                                                    checked,
                                                    active,
                                                }) =>
                                                    classNames(
                                                        checked
                                                            ? "border-transparent"
                                                            : "border-gray-300",
                                                        active
                                                            ? "ring-2 ring-slate-500"
                                                            : "",
                                                        "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                                                    )
                                                }
                                            >
                                                {({ checked, active }) => (
                                                    <>
                                                        <div className="flex-1 flex">
                                                            <div className="w-full flex items-center justify-center gap-2">
                                                                <RadioGroup.Description
                                                                    as="span"
                                                                    className="h-6 w-6 text-sm font-medium text-gray-900"
                                                                >
                                                                    <img
                                                                        src={
                                                                            paymentMethod.logo
                                                                        }
                                                                        alt=""
                                                                    />
                                                                </RadioGroup.Description>
                                                                <RadioGroup.Label
                                                                    as="span"
                                                                    className="block text-sm font-medium text-gray-900"
                                                                >
                                                                    {
                                                                        paymentMethod.title
                                                                    }
                                                                </RadioGroup.Label>
                                                            </div>
                                                        </div>
                                                        {checked ? (
                                                            <CheckCircleIcon
                                                                className="h-5 w-5 text-slate-600"
                                                                aria-hidden="true"
                                                            />
                                                        ) : null}
                                                        <div
                                                            className={classNames(
                                                                active
                                                                    ? "border"
                                                                    : "border-2",
                                                                checked
                                                                    ? "border-slate-500"
                                                                    : "border-transparent",
                                                                "absolute -inset-px rounded-lg pointer-events-none"
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10 lg:mt-0">
                            <div className="mt-4 bg-slate-100 border border-gray-200 rounded-lg shadow-sm">
                                <h2 className="p-8 text-xl font-display text-gray-900">
                                    Payment summary
                                </h2>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Amount</dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            {form.amount}
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">
                                            Charge ({paymentMethod.charge}%)
                                        </dt>
                                        <dd className="text-sm font-medium text-gray-900">
                                            {form.charge}
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">
                                            Total
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            {form.total}
                                        </dd>
                                    </div>
                                </dl>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button
                                        type="submit"
                                        id="paymentButton"
                                        className="w-full flex items-center justify-center gap-2 bg-slate-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-sm font-bold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-slate-500"
                                    >
                                        {loading && (
                                            <svg
                                                id="paymentLoadingSpinner"
                                                class="spinner"
                                                viewBox="0 0 50 50"
                                            >
                                                <circle
                                                    class="path"
                                                    cx="25"
                                                    cy="25"
                                                    r="20"
                                                    fill="none"
                                                    stroke-width="5"
                                                ></circle>
                                            </svg>
                                        )}
                                        <span id="paymentButtonText">
                                            Confirm order
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
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
