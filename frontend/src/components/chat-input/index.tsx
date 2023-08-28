export default function ChatInput() {
    return (
        <div className="flex items-center justify-center gap-1 p-2 mx-4 h-fit rounded-md bg-slate-800">
            <textarea 
                className="flex-1 p-2 outline-none resize-none bg-slate-800 text-white"
                rows={1}
                placeholder="Send a message"
            />
            <button className="bg-seecho-gold rounded">
                Send
            </button>
        </div>

    );
}
