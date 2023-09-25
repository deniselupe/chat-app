type TimeStampProps = {
    children: string;
};

export default function TimeStamp({ children }: TimeStampProps) {
    return (
        <div className="w-full h-12 px-4 flex items-center">
            <hr className="w-1/2 border-top border-seecho-lightgrey" />
            <p className="text-xs text-seecho-lightgrey text-center">{children}</p>
            <hr className="w-1/2 border-top border-seecho-lightgrey" />
        </div>
    );
}