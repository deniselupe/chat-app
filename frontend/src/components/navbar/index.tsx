import Logo from "@/public/svgs/chat-app-logo.svg";

export default function NavBar() {
    return (
        <header className="my-6 flex items-center text-xl">
            <h1 className="w-24 text-center">
                <Logo className="w-40" />
            </h1>
            <div className="flex-1 ml-5">
            </div>
        </header>
    );
}