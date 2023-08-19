import MenuIcon from '@/public/svgs/menu-icon.svg';

type SidebarToggleType = {
    onClick: () => void;
    className?: string;
};

export default function SidebarToggle({ onClick, className }: SidebarToggleType) {
    return <MenuIcon onClick={onClick} className={`w-8 text-seecho-gold border border-seecho-gold hover:border-seecho-lightblue rounded ${className}`} />;
}