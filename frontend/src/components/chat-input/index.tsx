"use client";

import { useRef, useState, useEffect } from "react";

export default function ChatInput() {
    const [input, setInput] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "0px";
            const scrollHeight = textAreaRef.current.scrollHeight;

            if (scrollHeight >= 184) {
                textAreaRef.current.style.height = "184px";
                return;
            }

            textAreaRef.current.style.height = scrollHeight + "px";
        }
    }, [input]);

    const handleInput = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        console.log(val);
        setInput(val);
    };

    return (
        <div className="sticky bottom-0">
            <div className="relative flex items-center p-2 mx-4 rounded-md bg-seecho-darkgrey">
                <textarea
                    className="flex-1 py-2 pl-2 pr-12 outline-none resize-none bg-seecho-darkgrey text-white"
                    placeholder="Send a message"
                    rows={1}
                    ref={textAreaRef}
                    onChange={handleInput}
                    value={input}
                />
                <button className="absolute right-4 bottom-4 bg-seecho-gold rounded">
                    Send
                </button>
            </div>
        </div>

    );
}
