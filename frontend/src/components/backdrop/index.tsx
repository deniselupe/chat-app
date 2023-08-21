type BackdropType = {
    open: boolean;
    onClick: () => void;
};

export default function Backdrop({ open, onClick }: BackdropType) {
    if (!open) {
        return null;
    }
    
    return <div onClick={onClick} className="mx-auto fixed left-0 right-0 top-0 bottom-0 bg-white opacity-25 md:hidden z-10" />;
}