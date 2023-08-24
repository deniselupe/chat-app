import { nanoid } from "nanoid";
import { ActionType, ProviderType } from "@/types/auth";

export const providerURLs = {
    discord: "https://discord.com/api/oauth2/authorize?client_id=1140763650303459408&redirect_uri=https%3A%2F%2Fptilol.com%2Flanding%2F&response_type=code&scope=identify%20email",
};

export const locateAuthState = () => {
    const stateExists = !!localStorage.getItem("authState");

    if (stateExists) {
        localStorage.removeItem("authState");
    }
};

export const createAuthState = (action: ActionType, provider: ProviderType) => {
    locateAuthState();
    const now = new Date().getTime();
    const expiration = now + (10 * 60 * 1000);
    const state = nanoid();
    const stateObj = {action, provider, state, expiration};
    localStorage.setItem("authState", JSON.stringify(stateObj));
    return state;
};
