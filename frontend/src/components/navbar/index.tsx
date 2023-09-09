import Link from "next/link";
import Logo from "@/public/svgs/seecho-logo.svg";

export default function NavBar() {
    return (
        <nav className="w-fit mx-auto my-8 sm:w-3/4 sm:flex sm:justify-between">
            <Link href="/" className="py-4 flex justify-center">
                <Logo className="w-24 text-seecho-gold hover:text-black" />
            </Link>
            <div className="py-4 flex justify-center items-center">
                <Link href="https://ptilol.com/api/auth/state?provider=discord&intent=signin" prefetch={false}>
                    <p className="text-2xl font-medium text-seecho-gold hover:text-black mx-2 lg:mx-4">Sign in</p>
                </Link>
            </div>
        </nav>
    );
}
