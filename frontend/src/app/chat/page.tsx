import Messages from "@/components/messages";
import SeechoInteraction from "@/components/seecho-interaction";

export default function Chat() {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row">
            <Messages />
            <SeechoInteraction />
        </div>
    );
}