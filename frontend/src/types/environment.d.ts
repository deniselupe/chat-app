declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_AUTH_DOMAIN: string;
        }
    }
}

export {}
