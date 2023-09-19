import Messages from "@/components/messages";
import SeechoInteraction from "@/components/seecho-interaction";
import { notFound } from "next/navigation";

interface ChatProps {
    params: {
        chatId?: string[];
    }
}

export default async function Chat({ params }: ChatProps) {
    const { chatId } = params;

    if (!!chatId && chatId.length > 1) {
        notFound();
    }

    const messagesResponse = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const messages = await messagesResponse.json();

    return (
        <div className="absolute w-full h-full flex flex-col-reverse lg:flex-row">
            <Messages />
            <SeechoInteraction />
        </div>
    );
}