type UserMessageType = {
    children: string;
};

export default function UserMessage({ children }: UserMessageType) {
    return (
        <div className="text-black w-full h-fit px-4 flex gap-x-2">
            <div className="w-9 h-9 rounded-full bg-black flex-none" />
            <div className="w-full">
                <p className="text-sm text-white mb-1">Denise Rodriguez</p>
                <div className="text-md p-2 h-fit bg-seecho-gold/70">
                    {children}
                </div>
            </div>
        </div>
    );
}
