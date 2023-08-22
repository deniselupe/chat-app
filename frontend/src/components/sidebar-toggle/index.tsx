import MenuIcon from '@/public/svgs/menu-icon.svg';

type SidebarToggleType = {
    onClick: () => void;
};

export default function SidebarToggle({ onClick }: SidebarToggleType) {
    return <MenuIcon onClick={onClick} className="w-8 text-seecho-gold hover:text-seecho-lightblue hover:bg-white hover:bg-opacity-10 rounded" />;
}