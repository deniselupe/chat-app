import express, { Request, Response } from "express";

const router = express.Router();

router.get("/user", async (req: Request, res: Response) => {
    const code = req.query.code;
    
    if (code) {
        try {
            const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
                method: "POST",
                body: new URLSearchParams({
                    client_id: process.env.DISCORD_CLIENT_ID,
                    client_secret: process.env.DISCORD_SECRET,
                    code: code.toString(),
                    grant_type: "authorization_code",
                    redirect_uri: "https://ptilol.com/api/auth/user",
                    scope: "identify email",
                }).toString(),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });

            const oAuthData = await tokenResponse.json();
            console.log(oAuthData);

            const tokenType = oAuthData.token_type;
            const accessToken = oAuthData.access_token;

            const userResult = await fetch("https://discord.com/api/users/@me", {
                headers: { authorization: `${tokenType} ${accessToken}` },
            });

            const userResultData = await userResult.json();

            console.log(userResultData);
        } catch (error) {
            console.error(error);
        }
    }

    res.send("Check for TokenResponse");
});

export default router;
