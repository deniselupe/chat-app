"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const authState = localStorage.getItem("authState");

    useEffect(() => {
        if (!state || !code) {
            console.log("No state or code provided from provider. Please retry login.");
            return router.replace("/signin");
        } else if (!authState) {
            console.log("No authState present in localStorage. Please retry login.");
            return router.replace("/signin");
        }
    }, []);

    return <div>Loading....</div>;
}