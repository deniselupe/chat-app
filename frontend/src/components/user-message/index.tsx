type UserMessageType = {
    children: string;
    contd: boolean;
};

export default function UserMessage({ children, contd }: UserMessageType) {
    return (
        <div className={`text-black w-full h-fit px-4 my-1 flex gap-x-2`}>
            <div className={`w-9 h-9 rounded-full ${!contd && 'bg-black'} flex-none`} />
            <div>
                {!contd && <p className="text-sm text-white mb-1">Denise Rodriguez</p>}
                <div className={`text-md p-2 h-fit bg-seecho-orange rounded`}>
                    {children}
                </div>
            </div>
        </div>
    );
}