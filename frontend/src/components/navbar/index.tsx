"use client";

import Link from "next/link";
import Logo from "@/public/svgs/seecho-logo.svg";
import { useSelectedLayoutSegment } from "next/navigation";
import { useSessionContext } from "@/contexts/session";

export default function NavBar() {
    const { useSession } = useSessionContext();
    const seechoSession = useSession();
    const segment = useSelectedLayoutSegment();

    if (segment === "chat") {
        return null;
    }

    return (
        <nav className="w-fit mx-auto my-8 sm:w-3/4 sm:flex sm:justify-between">
            <Link href="/" className="py-4 flex justify-center">
                <Logo className="w-24 text-seecho-gold hover:text-black" />
            </Link>
            <div className="py-4 flex justify-center items-center">
                {
                    !!seechoSession
                    ?
                    <p className="text-2xl font-medium text-seecho-gold hover:text-black mx-2 lg:mx-4">
                        Welcome back, {seechoSession.username}
                    </p>
                    :
                    <Link href={`https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/sso/state?provider=discord`} prefetch={false}>
                        <p className="text-2xl font-medium text-seecho-gold hover:text-black mx-2 lg:mx-4">Sign in</p>
                    </Link>
                }
            </div>
        </nav>
    );
}
