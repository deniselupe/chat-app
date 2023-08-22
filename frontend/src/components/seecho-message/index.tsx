type SeechoMessageType = {
    children: string;
    contd: boolean;
};

export default function SeechoMessage({ children, contd }: SeechoMessageType) {
    return (
        <div className={`text-white w-full h-fit px-4 my-1 flex flex-col items-end`}>
            {!contd && <p className="text-sm mb-1">Seecho</p>}
            <div className={`text-md p-2 h-fit bg-seecho-darkblue rounded`}>
                {children}
            </div>
        </div>
    );
}