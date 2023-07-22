import Link from 'next/link';

export default function LoginPage() {
    return (
        <form className="w-96 mx-auto sm:w-3/4 md:w-[550px] h-fit sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl">
            <div className="w-full mb-8">
                <h1 className="mb-2 text-5xl text-seecho-orange text-center">Welcome back!</h1>
                <h2 className="text-center text-seecho-orange">We are so excited to see you again!</h2>
            </div>
            <div className="w-full mb-6">
                <input className="w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg" type="email" id="email" name="email" placeholder="Email Address" />
            </div>
            <div className="w-full mb-2">
                <input className="w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg" type="text" id="password" name="confirm_password" placeholder="Confirm Password" />
            </div>
            <Link href="#" className="w-full mb-10">
                <p className="text-seecho-lightblue hover:underline">Forgot your password?</p>
            </Link>
            <button className="w-full mb-4 leading-10 tracking-wider text-2xl text-seecho-darkblue bg-seecho-orange hover:bg-seecho-lightblue rounded-lg">Log in</button>
            <p className="w-full inline-flex text-seecho-orange">New to seecho? 
                <Link href="/signup" className="ml-1 text-seecho-lightblue hover:underline">Create an account</Link>
            </p>
            <div className="w-full h-12 flex items-center">
                <hr className="w-1/2 border-top border-seecho-orange" />
                <p className="w-16 h-8 text-seecho-gold flex justify-center items-center border border-seecho-orange rounded-lg">OR</p>
                <hr className="w-1/2 border-top border-seecho-orange" />
            </div>
        </form>
    );
}