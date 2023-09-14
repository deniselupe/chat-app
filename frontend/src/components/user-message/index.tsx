type UserMessageType = {
    children: string;
    contd: boolean;
};

export default function UserMessage({ children, contd }: UserMessageType) {
    return (
        <div className={`text-black w-full h-fit px-4 ${!!contd ? 'mt-1' : 'mt-6'} mb-2 flex gap-x-2`}>
            {!contd && <div className="w-9 h-9 rounded-full bg-black flex-none" />}
            <div className={`w-full ${contd && 'pl-11'}`}>
                {!contd && <p className="text-sm text-white mb-1">Denise Rodriguez</p>}
                <div className="text-md whitespace-pre-wrap py-2 px-8 w-fit h-fit bg-seecho-gold rounded-tr-full rounded-br-full rounded-bl-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
