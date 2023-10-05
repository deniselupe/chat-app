"use client";

import UserMessage from "@/components/user-message";
import SeechoMessage from "@/components/seecho-message";
import ChatInput from "@/components/chat-input";
import Timestamp from "@/components/timestamp";
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
        <div className="relative w-full h-1/2 lg:w-1/2 lg:h-full">
            <div className="absolute w-full h-full overflow-x-hidden messages">
                <div className="flex flex-col-reverse">
                    <span ref={scrollDownRef} />
                    {
                        messagesList.map((message, index) => {
                            if (index % 6 === 0) {
                                return (
                                    <div key={message.id}>
                                        {
                                            index % 2 === 0
                                            ?
                                            <UserMessage contd={false}>{message.body}</UserMessage>
                                            :
                                            <SeechoMessage contd={false}>{message.body}</SeechoMessage>
                                        }
                                        <Timestamp>September 25, 2023</Timestamp>
                                    </div>
                                )
                            } else {
                                if (index % 2 === 0) {
                                    return <UserMessage contd={false} key={message.id}>{message.body}</UserMessage>;
                                } else {
                                    return <SeechoMessage contd={false} key={message.id}>{message.body}</SeechoMessage>;
                                }
                            }
                        })
                    }
                </div>
                <div className="sticky bottom-0">
                    <ChatInput sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
}
