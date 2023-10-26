"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SessionType, SessionContextType, SessionProviderProps } from "@/types/session";

const SessionContext = createContext({} as SessionContextType);

export function SessionProvider ({ children }: SessionProviderProps) {
    const [session, setSession] = useState<SessionType | null>(null);

    const fetchSession = async () => {
        try {
            const sessionResponse = await fetch("https://ptilol.com/api/auth/user");

            if (sessionResponse.status === 200) {
                const sessionData = await sessionResponse.json();
                setSession(sessionData);
            } else {
                console.error(`Status ${sessionResponse.status}: User not logged in or token invalid.`);
            }
        } catch (error) {
            console.error("Fetching session failed.")
        }
    };

    const validateSession = () => {
        // make API call that verifies the JWT Token and lets us know if token is still valid
    };

    const clearSession = async () => {
        // make API call to delete JWT Token HTTPOnly cookie
        setSession(null);
    };

    useEffect(() => {
        fetchSession();
    }, []);

    return (
        <SessionContext.Provider value={{ fetchSession, validateSession, clearSession }}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSessionContext = () => useContext(SessionContext);
