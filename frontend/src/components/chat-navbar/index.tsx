import Link from 'next/link';
import SeechoLogo from '@/public/svgs/seecho-logo.svg';
import MenuIcon from '@/public/svgs/menu-icon.svg';

export default function ChatNavigation() {
    return (
        <div className="w-64 h-screen flex flex-col px-8 text-white bg-zinc-900">
            <div className="flex justify-between items-end mt-6">
                <Link href="/">
                    <SeechoLogo className="w-32 text-seecho-gold hover:text-seecho-lightblue" />
                </Link>
                <MenuIcon className="w-8 text-seecho-gold border border-seecho-gold hover:border-seecho-lightblue rounded" /> 
            </div>
            <ul className="mt-12">
                <li>Dashboard</li>
                <li>My Tasks</li>
                <li>Statistics</li>
                <li>Profiles</li>
                <li>Settings</li>
            </ul>
            <div className="mt-8">
                <h3>Teams</h3>
                <ul>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Add Project</li>
                </ul>
            </div>
        </div>
    );
}