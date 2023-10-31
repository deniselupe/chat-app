"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SessionObjType, SessionType, SessionContextType, SessionProviderProps } from "@/types/session";

const SessionContext = createContext({} as SessionContextType);

export function SessionProvider ({ children }: SessionProviderProps) {
    const [session, setSession] = useState<SessionType>(null);

    const fetchSession = async () => {
        try {
            const sessionResponse = await fetch(`https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/auth`);

            if (sessionResponse.status === 200) {
                const sessionData: SessionObjType = await sessionResponse.json();
                console.log(sessionData);
                setSession(sessionData);
            } else {
                console.error(`Status ${sessionResponse.status}: User not logged in or token invalid.`);
            }
        } catch (error) {
            console.error("Fetching session failed.");
        }
    };

    const useSession = () => {
        return session;
    };

    const validateSession = () => {
        // make API call that verifies the JWT Token and lets us know if token is still valid
    };

    const closeSession = () => {
        // Make an API call to delete JWT Token from HTTPOnly cookie
    };

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <SessionContext.Provider value={{ useSession, validateSession, closeSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSessionContext = () => useContext(SessionContext);
