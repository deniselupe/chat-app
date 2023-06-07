import Link from 'next/link';
import Logo from '../svgs/seecho-logo.svg';
import DiscordIcon from '../svgs/discord-icon.svg';
import TwitterIcon from '../svgs/twitter-icon.svg';
import SearchIcon from '../svgs/search-icon.svg';
import MenuIcon from'../svgs/menu-icon.svg';

export default function NavBar() {
    return (
        <nav className="mx-60 my-16 flex justify-between min-w-[600px]">
            <Link href="/">
                <Logo className="w-64 h-14" />
            </Link>
            <div className="w-1/2 flex justify-end items-end">
                <DiscordIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <TwitterIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <SearchIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <MenuIcon className="text-seecho-gold hover:text-black min-w-[40px] w-10 h-10 ml-7" />
                <p className="text-4xl font-medium text-seecho-gold hover:text-black ml-7">Login</p>
            </div>
        </nav>
    );
}