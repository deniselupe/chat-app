import { Request, Response } from "express";
import uniqid from "uniqid";

export const sendToAuth = async (req: Request, res: Response) => {
    const stateExists = !!req.session.oAuthState;

    if (stateExists) {
        delete req.session.oAuthState;
    }

    const now = new Date().getTime();
    const expiration = now + (10 * 60 * 1000);
    const state = uniqid();
    const stateObj = {state, expiration};
    const discordAuthUrl = `${process.env.DISCORD_URL}&state=${state}`;

    req.session.oAuthState = stateObj;
    res.redirect(discordAuthUrl);
};

export const getUserData = async (req: Request, res: Response) => {
    const code = req.query.code as string;
    const state = req.query.state as string;
    const oAuthState = req.session.oAuthState;

    console.log("Code: ", code);
    console.log("State: ", state);
    console.log("oAuthState: ", oAuthState);

    if (!code) {
        console.log("There is no authorization grant code. Please sign-in again.");
        res.redirect("https://ptilol.com/");
    }

    if (!state) {
        console.log("There is no state. Please sign-in again.");
        res.redirect("https://ptilol.com/");
    }
    
    if (!oAuthState) {
        console.log("There is no oAuthState object. Please sign-in again.");
        res.redirect("https://ptilol.com/");
    } else {
        const origState = oAuthState.state;
        const expiration = oAuthState.expiration;
        const now = new Date().getTime();
    
        if (now > expiration) {
            console.log("Your state is past expiration! Please sign-in again.");
            res.redirect("https://ptilol.com/");
        }
    
        if (origState !== state) {
            console.log("The state does not match. Please sign-in again.");
            res.redirect("https://ptilol.com/");
        }
    
        delete req.session.oAuthState;
    }

    try {
        const oAuthData = await getOAuthData(code);
        const oAuthProfile = await getOAuthProfile(oAuthData.token_type, oAuthData.access_token);
    } catch (error) {
        console.error(error);
    }

    console.log(req.session);
    res.send("Check the logs for Auth Results");
};

const getOAuthData = async (code: string) => {
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams({
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_SECRET,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: "https://ptilol.com/api/auth/user",
            scope: "identify email",
        }).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const oAuthData = await tokenResponse.json();
    console.log(oAuthData);
    return oAuthData;
};

const getOAuthProfile = async (tokenType: string, accessToken: string) => {
    const userResult = await fetch("https://discord.com/api/users/@me", {
        headers: { authorization: `${tokenType} ${accessToken}` },
    });

    const userData = await userResult.json();
    console.log(userData);
    return userData;
};
