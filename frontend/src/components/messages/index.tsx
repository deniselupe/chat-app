"use client";

import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";
import { useRef } from "react";
import { Message } from "@/types/messages";

type MessagesProps = {
    messages: Message[];
};

export default function Messages({ messages }: MessagesProps) {
    const scrollDownRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col">
            <div className="overflow-x-hidden flex flex-col-reverse messages">
                <span ref={scrollDownRef} />
                {
                    messages.map((message, index) => {
                        if (index % 2 === 0) {
                            return <UserMessage contd={false} key={index}>{message.body}</UserMessage>;
                        }

                        return <SeechoMessage contd={false} key={index}>{message.body}</SeechoMessage>;
                    })
                }
            </div>
            <ChatInput />
        </div>
    );
}
