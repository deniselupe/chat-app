export type SessionType = {
    name: string;
    email: string;
    id: string;
};

export type SessionContextType = {
    fetchSession: () => void;
    validateSession: () => void;
    clearSession: () => void;
};

export type SessionProviderProps = {
    children: React.ReactNode;
};
