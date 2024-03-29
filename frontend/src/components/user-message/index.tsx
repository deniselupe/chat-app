type UserMessageType = {
    children: string;
    contd: boolean;
};

export default function UserMessage({ children, contd }: UserMessageType) {
    return (
        <div className={`w-full h-fit px-4 ${!!contd ? 'mt-1' : 'mt-6'} mb-2 flex flex-col items-end`}>
            {!contd && <p className="text-sm text-white text-right mb-1">Denise Rodriguez</p>}
            <div className="relative px-4 py-2 mr-4 text-md whitespace-pre-wrap bg-seecho-lightgreen box-shadow rounded-tl-2xl rounded-bl-2xl rounded-br-2xl before:absolute before:w-10 before:h-4 before:border before:border-transparent before:top-0 before:-right-10 before:rounded-tl-2xl before:shadow-user-bubble">
                {children}
            </div>
            <h3 className="text-white text-xs px-4 py-2">4:56 PM CDT</h3>
        </div>
    );
}
