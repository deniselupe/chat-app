"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/svgs/chat-app-logo.svg";
import MenuIcon from "@/public/svgs/menu-icon.svg";

export default function Header() {
    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <header className="text-xl font-light text-white my-6">
            <div id="top-nav" className="w-5/6 md:w-3/4 mx-auto flex justify-between items-center z-10">
                <Logo className="w-40 min-w-40" />
                <div className="flex-1 ml-5">
                    <div className="flex gap-5 justify-end items-center drop-shadow-nav">
                        <Link href="/" className="hidden md:inline-block">Home</Link>
                        <Link href="/about" className="hidden md:inline-block">About</Link>
                        <Link href="#" className="hidden md:inline-block">Sign in</Link>
                        <MenuIcon className="w-10 inline-block md:hidden cursor-pointer" onClick={handleToggle} />
                    </div>
                </div>
            </div>
            {
                open
                &&
                <div id="bot-nav" className="box-shadow block md:hidden">
                    <ul className={`w-5/6 md:w-3/4 mx-auto border-t border-custom-tan`}>
                        <li className="py-4 border-b border-custom-tan">Home</li>
                        <li className="py-4 border-b border-custom-tan">About</li>
                        <li className="py-4">Sign in</li>
                    </ul>
                </div>
            }
        </header>
    );
}