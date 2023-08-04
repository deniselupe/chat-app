'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { z } from 'zod';

const SignupFormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirm_password: z.string()
});

type SignupFormType = z.infer<typeof SignupFormSchema>;

export default function LoginPage() {
    const form = useForm<SignupFormType>({shouldFocusError: false});
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: SignupFormType) => {
        console.log('Form submitted', data);
    };

    return (
        <>
            <form 
                className="mx-auto w-[370px] md:w-[400px] h-fit sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className="w-full mb-8">
                    <h1 className="text-5xl text-seecho-orange text-center">Get Started</h1>
                </div>
                <div className="w-full mb-4">
                    <input 
                        className={`w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none ${errors.email?.message && 'outline-red-500'} focus:outline-seecho-lightblue rounded-lg`}
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Please provide your email address'
                            }
                        })}
                    />
                    <p className="text-red-500 mt-2">{errors.email?.message}</p>
                </div>
                <div className="w-full mb-10">
                    <input 
                        className={`w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none ${errors.password?.message && 'outline-red-500'} focus:outline-seecho-lightblue rounded-lg`}
                        type="text"
                        id="password"
                        placeholder="Create Password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Please provide a password'
                            }
                        })}
                    />
                    <p className="text-red-500 mt-2">{errors.password?.message}</p>
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