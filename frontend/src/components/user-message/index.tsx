type UserMessageType = {
    children: string;
    contd: boolean;
};

export default function UserMessage({ children, contd }: UserMessageType) {
    return (
        <div className={`w-full h-fit px-4 ${!!contd ? 'mt-1' : 'mt-6'} mb-2 flex gap-x-2`}>
            {!contd && <div className="w-9 h-9 rounded-full bg-black flex-none" />}
            <div className={`w-full ${contd && 'pl-11'}`}>
                {!contd && <p className="text-sm text-white mb-1">Denise Rodriguez</p>}
                <div className="relative px-4 py-2 ml-4 text-md bg-seecho-gold rounded-tr-2xl rounded-br-2xl rounded-bl-2xl before:absolute before:w-10 before:h-4 before:border before:border-transparent before:top-0 before:-left-10 before:rounded-tr-2xl before:shadow-user-bubble">
                    {children}
                </div>
            </div>
        </div>
    );
}
