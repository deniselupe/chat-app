type BackdropType = {
    open: boolean;
    onClick: () => void;
};

export default function Backdrop({ open, onClick }: BackdropType) {
    if (!open) {
        return null;
    }
    
    return <div onClick={onClick} className="mx-auto fixed w-screen h-screen bg-white opacity-25 md:hidden z-10" />;
}