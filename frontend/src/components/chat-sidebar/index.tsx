import Link from "next/link";
import SidebarToggle from "@/components/sidebar-toggle";
import SeechoLogo from "@/public/svgs/seecho-logo.svg";

export default function ChatSidebar() {
    return (
        <div className="w-64 h-screen flex flex-col px-8 text-white bg-zinc-900">
            <div className="flex justify-between items-end mt-6">
                <Link href="/">
                    <SeechoLogo className="w-32 text-seecho-gold hover:text-seecho-lightblue" />
                </Link>
                <SidebarToggle />
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
    );
}