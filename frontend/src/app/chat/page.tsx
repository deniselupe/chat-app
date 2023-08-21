"use client";

import { useState } from "react";
import ChatSidebar from "@/components/chat-sidebar";
import Backdrop from "@/components/backdrop";

export default function Chat() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    const closeSidebar = () => {
        setOpen(false);
    };

    return (
        <main className="mx-auto fixed left-0 right-0 top-0 bottom-0">
            <Backdrop open={open} onClick={closeSidebar} />
            <ChatSidebar open={open} onClick={toggleSidebar} />
            <p className={`border-2 duration-500 transform ${open ? 'md:translate-x-64': 'md:translate-x-0'}`}>Hello this is Chat UI</p>
        </main>
    );
}