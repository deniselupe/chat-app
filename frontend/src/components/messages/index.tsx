"use client";

import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";
import { useState, useRef, useEffect } from "react";
import { Message } from "@/types/messages";

type MessagesProps = {
    messages: Message[];
};

export default function Messages({ messages }: MessagesProps) {
    const [messagesList, setMessagesList] = useState(messages);
    const scrollDownRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (scrollDownRef.current) {
            scrollDownRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messagesList]);

    const sendMessage = (messageText: string) => {
        const newMessage = {
            "userId": messagesList.length,
            "id": messagesList.length,
            "title": `Title for Message #${messagesList.length}`,
            "body": messageText,
        };

        setMessagesList((prev) => [newMessage, ...prev]);
    };

    return (
        <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col">
            <div className="overflow-x-hidden flex flex-col-reverse messages">
                <span ref={scrollDownRef} />
                {
                    messagesList.map((message, index) => {
                        if (index % 2 === 0) {
                            return <UserMessage contd={false} key={index}>{message.body}</UserMessage>;
                        }

                        return <SeechoMessage contd={false} key={index}>{message.body}</SeechoMessage>;
                    })
                }
            </div>
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
}
