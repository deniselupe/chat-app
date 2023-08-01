'use client';

import Link from 'next/link';
import Logo from '@/public/svgs/seecho-logo.svg';
import DiscordIcon from '@/public/svgs/discord-icon.svg';
import TwitterIcon from '@/public/svgs/twitter-icon.svg';
import SearchIcon from '@/public/svgs/search-icon.svg';
import MenuIcon from '@/public/svgs/menu-icon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavBar() {
    const segment = useSelectedLayoutSegment();

    return (
        <nav className="w-fit mx-auto my-8 sm:w-3/4 sm:flex sm:justify-between">
            <Link href="/" className="py-4 flex justify-center">
                <Logo className="w-64 min-w-[256px] h-14 min-h-[56px] text-seecho-gold hover:text-black" />
            </Link>
            <div className="py-4 flex justify-center items-center">
                <DiscordIcon className="text-seecho-gold hover:text-black w-8 h-8 mx-2 sm:w-10 sm:h-10 lg:mx-4" />
                <TwitterIcon className="text-seecho-gold hover:text-black w-8 h-8 mx-2 lg:mx-4" />
                <SearchIcon className="text-seecho-gold hover:text-black w-8 h-8 mx-2 sm:w-10 sm:h-10 lg:mx-4" />
                <MenuIcon className="text-seecho-gold hover:text-black w-8 h-8 mx-2 sm:w-10 sm:h-10 lg:mx-4" />
                {
                    segment === 'login'
                    ?
                    null
                    :
                    <Link href="/login">
                        <p className="text-4xl font-medium text-seecho-gold hover:text-black mx-2 lg:mx-4">Login</p>
                    </Link>
                }
            </div>
        </nav>
    );
}
