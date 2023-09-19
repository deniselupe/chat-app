"use client";

import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";
import { useRef, useEffect } from "react";
import { Message } from "@/types/messages";

type MessagesProps = {
    messages: Message[];
};

export default function Messages({ messages }: MessagesProps) {
    const scrollJump = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollJump.current) {
            scrollJump.current.scroll({
                top: scrollJump.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <div id="messages" className="overflow-x-hidden overflow-y-auto h-1/2 lg:w-1/2 lg:h-full" ref={scrollJump}>
            {
                messages.map((message, index) => {
                    if (index % 2 === 0) {
                        return <UserMessage contd={false} key={index}>{message.body}</UserMessage>;
                    }

                    return <SeechoMessage contd={false} key={index}>{message.body}</SeechoMessage>;
                })
            }
            <ChatInput />
        </div>
    );
}
