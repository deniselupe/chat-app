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

    console.log('Rendered!');

    return (
        <div className="flex items-center justify-center gap-1 p-2 mx-4 h-fit max-h-[200px] rounded-md bg-slate-800">
            <textarea 
                className="flex-1 p-2 outline-none resize-none bg-slate-800 text-white"
                placeholder="Send a message"
                rows={1}
                ref={textAreaRef}
                onChange={handleInput}
                value={input}
            />
            <button className="bg-seecho-gold rounded">
                Send
            </button>
        </div>
    );
}
