import { Request, Response } from "express";

export const getUserData = async (req: Request, res: Response) => {
    const code = typeof(req.query.code) === "string" ? req.query.code : '';

    if (!code) {
        console.log("No code is present. Please sign-in again.");
        res.redirect("https://ptilol.com/");
    }

    try {
        const oAuthData = await getOAuthData(code);
        const oAuthProfile = await getOAuthProfile(oAuthData.token_type, oAuthData.access_token);
    } catch (error) {
        console.error(error);
    }

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
