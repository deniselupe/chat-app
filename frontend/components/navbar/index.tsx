'use client';

import Link from 'next/link';
import Logo from '../svgs/seecho-logo.svg';
import DiscordIcon from '../svgs/discord-icon.svg';
import TwitterIcon from '../svgs/twitter-icon.svg';
import SearchIcon from '../svgs/search-icon.svg';
import MenuIcon from'../svgs/menu-icon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavBar() {
    const segment = useSelectedLayoutSegment();

    return (
        <nav className="w-fit mx-auto my-8 sm:w-3/4 sm:flex sm:justify-between">
            <Link href="/" className="py-4 flex justify-center">
                <Logo className="w-64 min-w-[256px] h-14 min-h-[56px] text-seecho-gold hover:text-black" />
            </Link>
            <div className="py-4 flex justify-center items-center">
                <DiscordIcon className="text-seecho-gold hover:text-black w-8 h-8 sm:w-12 sm:h-12 mx-2" />
                <TwitterIcon className="text-seecho-gold hover:text-black w-8 h-8 sm:w-12 sm:h-12 mx-2" />
                <SearchIcon className="text-seecho-gold hover:text-black w-8 h-8 sm:w-12 sm:h-12 mx-2" />
                <MenuIcon className="text-seecho-gold hover:text-black w-8 h-8 sm:w-12 sm:h-12 mx-2" />
                {
                    segment === 'login'
                    ?
                    null
                    :
                    <Link href="/login">
                        <p className="text-4xl font-medium text-seecho-gold hover:text-black mx-2">Login</p>
                    </Link>
                }
            </div>
        </nav>
    );
}
