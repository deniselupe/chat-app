"use client";

import { useRef, useState, useEffect } from "react";

type ChatInputProps = {
    sendMessage: (messageText: string) => void;
};

export default function ChatInput({ sendMessage }: ChatInputProps) {
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
        setInput(val);
    };

    const handleClickSend = () => {
        if (!input || input.trim().length === 0) {
            return;
        }

        sendMessage(input);
        setInput("");
    };

    const handleKeySend = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!input || input.trim().length === 0) {
            return;
        }
        
        if (evt.key === "Enter" && !evt.shiftKey) {
            evt.preventDefault();
            sendMessage(input);
            setInput("");
        }
    };

    return (
        <div className="relative flex items-center p-2 mx-4 rounded-md bg-seecho-darkgrey">
            <textarea
                className="flex-1 py-2 pl-2 pr-12 outline-none resize-none bg-seecho-darkgrey text-white"
                placeholder="Send a message"
                rows={1}
                ref={textAreaRef}
                onChange={handleInput}
                onKeyDown={handleKeySend}
                value={input}
            />
            <button className="absolute right-4 bottom-4 bg-seecho-gold rounded" onClick={handleClickSend}>
                Send
            </button>
        </div>
    );
}
