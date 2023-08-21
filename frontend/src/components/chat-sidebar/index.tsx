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
            {!open && <SidebarToggle onClick={onClick} className="mt-6 ml-2 fixed z-20" />}
            <div className={`fixed top-0 left-0 z-20 w-64 h-full px-4 text-white bg-zinc-900 duration-500 transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-end mt-6">
                    <Link href="/">
                        <SeechoLogo className="w-32 text-seecho-gold hover:text-seecho-lightblue" />
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