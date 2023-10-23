declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            SECRET_ID: string;
            DISCORD_URL: string;
            DISCORD_CLIENT_ID: string;
            DISCORD_SECRET: string;
        }
    }
}

export {}
