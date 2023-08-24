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

        const authStateJson = JSON.parse(authState);
        const expiration = authStateJson["expiration"];
        const origState = authStateJson["state"];
        const now = new Date().getTime();

        if (now > expiration) {
            console.log("Your state is past expiration! Please retry login.");
            return router.replace("/signin");
        }

        if (origState !== state) {
            console.log("The Provider's state does not match local state. Please retry login.");
            return router.replace("/signin");
        }
    }, []);

    return <div>Loading....</div>;
}