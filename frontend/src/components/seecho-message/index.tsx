type SeechoMessageType = {
    children: string;
    contd: boolean;
};

export default function SeechoMessage({ children, contd }: SeechoMessageType) {
    return (
        <div className={`w-full h-fit px-4 ${!!contd ? 'mt-1' : 'mt-6'} mb-2`}>
            {!contd && <p className="text-sm text-white mb-1">Seecho</p>}
            <div className="relative w-fit px-4 py-2 ml-4 text-md whitespace-pre-wrap bg-seecho-gold box-shadow rounded-tr-2xl rounded-br-2xl rounded-bl-2xl before:absolute before:w-10 before:h-4 before:border before:border-transparent before:top-0 before:-left-10 before:rounded-tr-2xl before:shadow-seecho-bubble">
                {children}
            </div>
        </div>
    );
}
