"use client";

import { useState } from "react";
import ChatSidebar from "@/components/chat-sidebar";
import Backdrop from "@/components/backdrop";
import SidebarToggle from "@/components/sidebar-toggle";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <main className="mx-auto w-screen h-screen bg-seecho-black">
            <Backdrop open={open} onClick={closeSidebar} />
            <ChatSidebar open={open} onClick={toggleSidebar} />
            <div className="relative flex flex-col h-screen">
                <div className="py-4 px-4">
                    <SidebarToggle onClick={toggleSidebar} />
                </div>
                <aside className={`relative grow transition-all duration-500 ease-in-out ${open ? 'md:ml-64' : 'md:ml-0'}`}>
                    {children}
                </aside>
            </div>
        </main>
    );
}