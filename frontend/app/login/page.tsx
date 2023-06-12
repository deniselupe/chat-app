import Link from 'next/link';
import Logo from '../../components/svgs/seecho-logo.svg';

export default function LoginPage() {
    return (
        <div className="container mx-auto h-full flex items-center">
            <form className="w-2/5 h-3/4 min-w-[350px] mx-auto p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue">
                <Link href="/" className="mb-10">
                    <Logo className="w-64 h-14 text-seecho-gold hover:text-black" />
                </Link>
                <div className="w-full mb-4">
                    <label className="text-seecho-gold text-2xl block mb-2" htmlFor="email">Email</label>
                    <input className="block text-1xl leading-8 rounded w-full" type="email" id="email" name="name" />
                </div>
                <div className="w-full mb-16">
                    <label className="text-seecho-gold text-2xl block mb-2" htmlFor="password">Password</label>
                    <input className="block text-1xl leading-8 rounded w-full" type="text" id="password" name="password" />
                </div>
                <button className="text-2xl text-seecho-darkblue bg-seecho-gold hover:bg-seecho-lightblue rounded w-full">Log in</button>
            </form>
        </div>
    );
}