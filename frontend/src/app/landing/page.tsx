"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ActionType, ProviderType } from "@/types/auth";
import { locateAuthState } from "@/lib/auth";

export default function LandingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const forwardAuthCode = async (action: ActionType, provider: ProviderType, code: string) => {
        locateAuthState();
        const url = `https://ptilol.com/api/auth/${action}/${provider}?code=${code}`;
        const response = await fetch(url);
        console.log(response);

        if (response.status === 200) {
            // TODO: Redirect user to their Chat UI
        } else {
            // TODO: Error occurred when trying to signup or signin, redirect user to login page
        }
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
        const action = authStateJson["action"];
        const now = new Date().getTime();

        if (now > expiration) {
            console.log("Your state is past expiration! Please retry login.");
            return router.replace("/signin");
        }

        if (origState !== state) {
            console.log("The Provider's state does not match local state. Please retry login.");
            return router.replace("/signin");
        }

        forwardAuthCode(action, providerName, code);
    }, []);

    return <div>Loading....</div>;
}
