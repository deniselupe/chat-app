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
        <nav className="mx-60 my-8 flex justify-between min-w-[600px]">
            <Link href="/">
                <Logo className="w-64 h-14 text-seecho-gold hover:text-black" />
            </Link>
            <div className="w-1/2 flex justify-end items-end">
                <DiscordIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <TwitterIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <SearchIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <MenuIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                {
                    segment === 'login'
                    ?
                    null
                    :
                    <Link href="/login">
                        <p className="text-4xl font-medium text-seecho-gold hover:text-black ml-7">Login</p>
                    </Link>
                }
            </div>
        </nav>
    );
}
