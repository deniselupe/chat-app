"use client";

import Link from "next/link";
import DiscordIcon from "@/public/svgs/discord-icon.svg";
import ShowPassword from "@/public/svgs/show-password.svg";
import HidePassword from "@/public/svgs/hide-password.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const SignupFormSchema = z.object({
    email: z.string().email("Please provide valid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(100, "Password cannot be longer than 100 characters")
        .refine((value) => /[A-Z]/.test(value), {
            message: "Password must contain at least one uppercase letter (A-Z)",
        })
        .refine((value) => /[a-z]/.test(value), {
            message: "Password must contain at least one lowercase letter (a-z)",
        })
        .refine((value) => /\d/.test(value), {
            message: "Password must contain at least one numeric digit (0-9)",
        })
        .refine((value) => /[#!?@$%^&*-]/.test(value), {
            message: "Password must contain at least one special character (#?!@$%^&*-)",
        }),
});

type SignupFormType = z.infer<typeof SignupFormSchema>;

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<SignupFormType>({shouldFocusError: false, resolver: zodResolver(SignupFormSchema)});
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: SignupFormType) => {
        console.log("Form submitted", data);
    };

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <main className="mx-auto w-[370px] md:w-[400px] h-fit sm:mt-28 p-10 rounded-3xl flex flex-col items-center bg-seecho-darkblue shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="w-full mb-8">
                    <h1 className="text-5xl text-seecho-orange text-center">Get Started</h1>
                </div>
                <div className="w-full mb-4">
                    <input 
                        className={`w-full px-4 leading-10 tracking-wider text-1xl text-seecho-gold bg-neutral-800 outline-none ${errors.email?.message && "outline-red-500"} focus:outline-seecho-lightblue rounded-lg`}
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Please provide your email address"
                            }
                        })}
                    />
                    <p className="text-red-500 text-xs mt-2">{errors.email?.message}</p>
                </div>
                <div className="relative flex items-center w-full">
                    <input 
                        className={`w-full pl-4 pr-12 text-seecho-gold text-1xl leading-10 tracking-wider bg-neutral-800 outline-none ${errors.password?.message && "outline-red-500"} focus:outline-seecho-lightblue rounded-lg`}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Create Password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Please provide a password"
                            }
                        })}
                    />
                    <div className="absolute right-2 w-8 aspect-square text-seecho-gold cursor-pointer" onClick={handleShowPassword}>
                        {
                            showPassword
                            ?
                            <ShowPassword />
                            :
                            <HidePassword />
                        }
                    </div>
                </div>
                <p className="text-red-500 text-xs mt-2 mb-4">{errors.password?.message}</p>
                <button className="w-full mb-4 leading-10 tracking-wider text-2xl text-seecho-darkblue bg-seecho-orange hover:bg-seecho-lightblue rounded-lg">Create Account</button>
                <p className="w-full inline-flex text-seecho-orange">Already have an account? 
                    <Link href="/signin" className="ml-1 text-seecho-lightblue hover:underline">Sign in</Link>
                </p>
            </form>
            <div className="w-full h-12 mt-2 flex items-center">
                <hr className="w-1/2 border-top border-seecho-orange" />
                <p className="w-16 h-8 text-seecho-gold flex justify-center items-center border border-seecho-orange rounded-lg">OR</p>
                <hr className="w-1/2 border-top border-seecho-orange" />
            </div>
            <Link
                className="w-full my-2 leading-10 tracking-wiedr text-xl text-seecho-darkblue bg-discord hover:bg-seecho-lightblue rounded-lg flex justify-center items-center"
                href="https://ptilol.com/api/auth/state?provider=discord&intent=signup"
                prefetch={false}
            >
                <DiscordIcon className="w-6 mr-4" />
                <p>Sign up with Discord</p>
            </Link>
        </main>
    );
}
