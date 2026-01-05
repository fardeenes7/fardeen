"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

export default function ProgressBarProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Next13ProgressBar
                height="4px"
                color="#1649E6"
                options={{ showSpinner: true }}
                showOnShallow
            />
        </>
    );
}
