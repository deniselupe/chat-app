import { nanoid } from "nanoid";

export const locateAuthState = () => {
    const stateExists = !!localStorage.getItem('authState');

    if (stateExists) {
        localStorage.removeItem('authState');
    }
};

export const createAuthState = () => {
    locateAuthState();
    const now = new Date().getTime();
    const expiration = now + (10 * 60 * 1000);
    const state = nanoid();
    const stateObj = {state, expiration};
    localStorage.setItem('authState', JSON.stringify(stateObj));
    return state;
};