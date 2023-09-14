import Messages from "@/components/messages";
import SeechoInteraction from "@/components/seecho-interaction";

/*
    Things to do:
        - Verify user is authenticated (SSR), if not authenticated then notFound().
        - Make this a Dynamic Route page with chatId slug.
        - If no chatId slug provided, <Messages /> will display empty view for New Chat.
        - If user clicks on existing chat, route to /chat/[chatId]
*/

export default function Chat() {
    return (
        <div className="w-full h-full flex flex-col-reverse lg:flex-row">
            <Messages />
            <SeechoInteraction />
        </div>
    );
}