type SeechoMessageType = {
    children: string;
    contd: boolean;
};

export default function SeechoMessage({ children, contd }: SeechoMessageType) {
    return (
        <div className={`text-white w-full h-fit px-4 ${!!contd ? 'mt-1' : 'mt-6'} mb-2 flex flex-col items-end`}>
            <div className="pl-11">
                {!contd && <p className="text-sm text-right mb-1">Seecho</p>}
                <div className="text-md py-2 px-8 w-fit h-fit bg-seecho-lightgreen/70 rounded-tl-full rounded-bl-full rounded-br-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
