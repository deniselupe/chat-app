export type SessionObjType = {
    username: string;
};

export type SessionType = SessionObjType | null;

export type SessionContextType = {
    useSession: () => SessionType;
    validateSession: () => void;
    closeSession: () => void;
};

export type SessionProviderProps = {
    children: React.ReactNode;
};
