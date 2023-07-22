import Link from 'next/link';

export default function LoginPage() {
    return (
        <form className="w-96 mx-auto sm:w-3/4 md:w-[750px] md:h-4/6 sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl">
            <div className="w-full mb-4">
                <h1 className="mb-2 text-5xl text-seecho-gold text-center">Welcome back!</h1>
                <h2 className="text-seecho-gold text-center">We are so excited to see you again!</h2>
            </div>
            <div className="w-full mb-4">
                <label className="mb-2 text-seecho-gold text-2xl block" htmlFor="email">Email</label>
                <input className="w-full block text-1xl leading-8 rounded" type="email" id="email" name="name" />
            </div>
            <div className="w-full mb-2">
                <label className="mb-2 text-seecho-gold text-2xl block" htmlFor="password">Password</label>
                <input className="w-full block text-1xl leading-8 rounded" type="text" id="password" name="password" />
            </div>
            <Link href="#" className="w-full mb-12">
                <p className="text-seecho-lightblue hover:underline">Forgot your password?</p>
            </Link>
            <button className="w-full mb-4 text-2xl text-seecho-darkblue bg-seecho-gold hover:bg-seecho-lightblue rounded">Log in</button>
            <p className="w-full inline-flex text-seecho-gold">New to seecho?
                <Link href="#" className="ml-1 text-seecho-lightblue hover:underline">Create an account</Link>
            </p>
            <div className="w-full h-12 flex items-center">
                <hr className="w-1/2 border-top border-seecho-gold" />
                <p className="w-16 h-8 rounded text-seecho-lightblue flex justify-center items-center border border-seecho-gold">OR</p>
                <hr className="w-1/2 border-top border-seecho-gold" />
            </div>
        </form>
    );
}