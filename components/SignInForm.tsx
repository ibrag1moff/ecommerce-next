"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEventHandler } from "react";

const SignInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });

        if (res && !res.error) {
            router.push("/profile");
        } else {
            console.log(res);
        }
    };

    return (
        <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit}
        >
            <input
                className="outline-none bg-transparent border-b-2 pb-3 min-w-[270px] lg:w-[350px] border-black placeholder:text-black"
                type="email"
                name="email"
                placeholder="Email"
                required
            />
            <input
                className="outline-none bg-transparent border-b-2 pb-3 min-w-[270px] lg:w-[350px] border-black placeholder:text-black"
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            <button
                className="bg-black py-2 px-8 rounded-3xl text-white font-semibold"
                type="submit"
            >
                Sign In
            </button>
        </form>
    );
};

export default SignInForm;
