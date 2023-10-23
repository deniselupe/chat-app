import dotenv from "dotenv";
import express, { Request, Response, response } from "express";
import { createServer, request } from "node:http";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express.js!");
});

app.get("/auth/user", async (req: Request, res: Response) => {
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
        } catch (error) {
            console.error(error);
        }
    }

    res.send("Check for TokenResponse");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
