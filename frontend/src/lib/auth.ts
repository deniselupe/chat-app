import { nanoid } from "nanoid";

export const locateAuthState = () => {
    const stateExists = !!localStorage.getItem('authState');

    if (stateExists) {
        localStorage.removeItem('authState');
    }
};

export const createAuthState = (provider: "discord") => {
    locateAuthState();
    const now = new Date().getTime();
    const expiration = now + (10 * 60 * 1000);
    const state = nanoid();
    const stateObj = {provider, state, expiration};
    localStorage.setItem('authState', JSON.stringify(stateObj));
    return state;
};
