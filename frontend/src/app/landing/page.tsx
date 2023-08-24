"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ProviderType } from "@/types/auth";

export default function LandingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // TODO: Remove authState from localStorage under condition that API call is 200 OK
    // TODO: Update /api/auth/ endpoint names to distinguish between /signin and /signup flows
    const forwardAuthCode = async (code: string, provider: ProviderType) => {
        const url = `https://ptilol.com/api/auth/signup/${provider}?code=${code}`;
        const response = await fetch(url);
        console.log(response);
        return response;
    };

    useEffect(() => {
        const code = searchParams.get("code");
        const state = searchParams.get("state");
        const authState = localStorage.getItem("authState");

        if (!state || !code) {
            console.log("No state or code provided from provider. Please retry login.");
            return router.replace("/signin");
        } else if (!authState) {
            console.log("No authState present in localStorage. Please retry login.");
            return router.replace("/signin");
        }

        const authStateJson = JSON.parse(authState);
        const expiration = authStateJson["expiration"];
        const origState = authStateJson["state"];
        const providerName = authStateJson["provider"];
        const now = new Date().getTime();

        if (now > expiration) {
            console.log("Your state is past expiration! Please retry login.");
            return router.replace("/signin");
        }

        if (origState !== state) {
            console.log("The Provider's state does not match local state. Please retry login.");
            return router.replace("/signin");
        }

        forwardAuthCode(code, providerName);
    }, []);

    return <div>Loading....</div>;
}