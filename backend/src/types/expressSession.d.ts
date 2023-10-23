declare module 'express-session' {
    export interface SessionData {
        oAuthState?: string;
    }
}

export {}
