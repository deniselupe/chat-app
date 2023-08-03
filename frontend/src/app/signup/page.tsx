'use client'

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default function LoginPage() {
    const form = useForm();
    const { register, control } = form;

    return (
        <>
            <form className="w-96 mx-auto sm:w-3/4 md:w-[550px] h-fit sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl">
                <div className="w-full mb-8">
                    <h1 className="text-5xl text-seecho-orange text-center">Get Started</h1>
                </div>
                <div className="w-full mb-6 flex justify-between">
                    <input 
                        className="w-full mr-2 px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        {...register("first_name")}
                    />
                    <input 
                        className="w-full ml-2 px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                        {...register("last_name")}
                    />
                </div>
                <div className="w-full mb-6">
                    <input 
                        className="w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg"
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        {...register("email")}
                    />
                </div>
                <div className="w-full mb-6">
                    <input 
                        className="w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg"
                        type="text"
                        id="password"
                        placeholder="Create Password"
                        {...register("password")}
                    />
                </div>
                <div className="w-full mb-10">
                    <input 
                        className="w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none focus:outline-seecho-lightblue rounded-lg"
                        type="text"
                        id="confirm_password"
                        placeholder="Confirm Password"
                        {...register("confirm_password")}
                    />
                </div>
                <button className="w-full mb-4 leading-10 tracking-wider text-2xl text-seecho-darkblue bg-seecho-orange hover:bg-seecho-lightblue rounded-lg">Create Account</button>
                <p className="w-full inline-flex text-seecho-orange">Already have an account? 
                    <Link href="/login" className="ml-1 text-seecho-lightblue hover:underline">Login</Link>
                </p>
                <div className="w-full h-12 flex items-center">
                    <hr className="w-1/2 border-top border-seecho-orange" />
                    <p className="w-16 h-8 text-seecho-gold flex justify-center items-center border border-seecho-orange rounded-lg">OR</p>
                    <hr className="w-1/2 border-top border-seecho-orange" />
                </div>
            </form>
            <DevTool control={control} />
        </>
    );
}