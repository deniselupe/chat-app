"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/public/svgs/chat-app-logo.svg";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <header className="text-xl font-light text-white my-6">
            <div id="top-nav" className="w-5/6 md:w-3/4 mx-auto flex justify-between items-center z-10">
                <Logo className="w-40 min-w-40" />
                <div className="flex-1 ml-5">
                    <div className="flex gap-5 justify-end items-center">
                        <Link href="/" className="hidden md:inline-block hover:transition hover:duration-300 hover:text-custom-yellow hover:drop-shadow-nav">Home</Link>
                        <Link href="/about" className="hidden md:inline-block hover:transition hover:duration-300 hover:text-custom-yellow hover:drop-shadow-nav">About</Link>
                        <button type="button" className="hidden md:inline-block w-20 h-9 rounded-full text-custom-purple text-md bg-white opacity-50 hover:opacity-100">Sign in</button>
                        <button type="button" className="w-10 h-10 inline-block md:hidden rounded flex flex-col justify-center items-center drop-shadow-nav" onClick={handleToggle}>
                            <div className={`w-8 h-1 my-1 rounded-full bg-white transition duration-300 opacity-100 ${open && "rotate-45 translate-y-3"}`} />
                            <div className={`w-8 h-1 my-1 rounded-full bg-white transition duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                            <div className={`w-8 h-1 my-1 rounded-full bg-white transition duration-300 opacity-100 ${open && "-rotate-45 -translate-y-3"}`} />
                        </button>
                    </div>
                </div>
            </div>
            {
                open
                &&
                <div id="bot-nav" className="box-shadow block md:hidden">
                    <ul className={`w-5/6 md:w-3/4 mx-auto border-t border-custom-yellow`}>
                        <li className="py-4 border-b border-custom-yellow hover:transition hover:duration-300 hover:text-custom-yellow hover:drop-shadow-nav">Home</li>
                        <li className="py-4 border-b border-custom-yellow hover:transition hover:duration-300 hover:text-custom-yellow hover:drop-shadow-nav">About</li>
                        <li className="py-4"><button type="button" className="w-20 h-9 rounded-full text-custom-purple bg-white opacity-50 hover:opacity-100">Sign in</button></li>
                    </ul>
                </div>
            }
        </header>
    );
}