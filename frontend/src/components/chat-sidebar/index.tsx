import Link from "next/link";
import SidebarToggle from "@/components/sidebar-toggle";
import SeechoLogo from "@/public/svgs/seecho-logo.svg";

type ChatSidebarType = {
    open: boolean;
    onClick: () => void;
};

export default function ChatSidebar({ open, onClick }: ChatSidebarType) {
    return (
        <>
            <div className={`fixed top-0 left-0 w-64 h-screen px-4 z-20 text-white bg-seecho-darkgrey duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="py-4 flex justify-between items-center">
                    <Link href="/">
                        <SeechoLogo className="w-24 text-seecho-gold hover:text-seecho-lightblue" />
                    </Link>
                    {open && <SidebarToggle onClick={onClick} />}
                </div>
                <ul className="mt-12">
                    <li>Dashboard</li>
                    <li>My Tasks</li>
                    <li>Statistics</li>
                    <li>Profiles</li>
                    <li>Settings</li>
                </ul>
                <div className="mt-8">
                    <h3>Teams</h3>
                    <ul>
                        <li>Sales</li>
                        <li>Marketing</li>
                        <li>Add Project</li>
                    </ul>
                </div>
            </div>
        </>
    );
}