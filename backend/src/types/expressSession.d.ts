type StateType = {
    state: string;
    expiration: number;
};

declare module 'express-session' {
    export interface SessionData {
        oAuthState?: StateType;
    }
}

export {}
