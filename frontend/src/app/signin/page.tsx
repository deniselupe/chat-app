"use client";

import Link from "next/link";
import DiscordIcon from "@/public/svgs/discord-icon.svg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAuthState } from "@/lib/auth";

const discordUrl = "https://discord.com/api/oauth2/authorize?client_id=1140763650303459408&redirect_uri=https%3A%2F%2Fptilol.com%2Flanding%2F&response_type=code&scope=identify%20email";

const SignInFormSchema = z.object({
    email: z.string().email("Please provide valid email address"),
    password: z.string()
});

type SignInFormType = z.infer<typeof SignInFormSchema>;

export default function SignInPage() {
    const router = useRouter();
    const form = useForm<SignInFormType>({shouldFocusError: false, resolver: zodResolver(SignInFormSchema)});
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: SignInFormType) => {
        console.log('SignIn Form Submitted', data);
    };

    const initiateOAuth = (provider: "discord") => {
        if (provider === "discord") {
            const state = createAuthState();
            const url = `${discordUrl}&state=${state}`;
            router.push(url);
        }
    };

    return (
        <main className="mx-auto w-[370px] md:w-[400px] h-fit sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <div className="w-full mb-8">
                    <h1 className="mb-2 text-5xl text-seecho-orange text-center">Welcome back!</h1>
                    <h2 className="text-center text-seecho-orange">We are so excited to see you again!</h2>
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
                                message: 'Please enter email address'
                            }
                        })}
                    />
                    <p className="text-red-500 text-xs mt-2">{errors.email?.message}</p>
                </div>
                <div className="w-full mb-2">
                    <input 
                        className={`w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none ${errors.password?.message && 'outline-red-500'} focus:outline-seecho-lightblue rounded-lg`}
                        type="text"
                        id="password"
                        placeholder="Password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Please enter password'
                            }
                        })}
                    />
                    <p className="text-red-500 text-xs mt-2">{errors.password?.message}</p>
                </div>
                <Link href="#" className="w-full mb-10">
                    <p className="text-seecho-lightblue hover:underline">Forgot your password?</p>
                </Link>
                <button className="w-full mb-4 leading-10 tracking-wider text-2xl text-seecho-darkblue bg-seecho-orange hover:bg-seecho-lightblue rounded-lg">Sign in</button>
                <p className="w-full inline-flex text-seecho-orange">New to seecho? 
                    <Link href="/signup" className="ml-1 text-seecho-lightblue hover:underline">Create an account</Link>
                </p>
            </form>
            <div className="w-full h-12 mt-2 flex items-center">
                <hr className="w-1/2 border-top border-seecho-orange" />
                <p className="w-16 h-8 text-seecho-gold flex justify-center items-center border border-seecho-orange rounded-lg">OR</p>
                <hr className="w-1/2 border-top border-seecho-orange" />
            </div>
            <button
                className="w-full my-2 leading-10 tracking-wiedr text-xl text-seecho-darkblue bg-discord hover:bg-seecho-lightblue rounded-lg flex justify-center items-center"
                onClick={() => initiateOAuth("discord")}
                type="button"
            >
                <DiscordIcon className="w-6 mr-4" />
                <p>Sign in with Discord</p>
            </button>
        </main>
    );
}