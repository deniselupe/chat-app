type SeechoMessageType = {
    children: string;
};

export default function SeechoMessage({ children }: SeechoMessageType) {
    return (
        <div className="text-white w-full h-fit px-4 my-1 flex flex-col items-end">
            <p className="text-sm mb-1">Seecho</p>
            <div className="text-md p-2 w-full h-fit bg-seecho-lightgreen/70">
                {children}
            </div>
        </div>
    );
}
