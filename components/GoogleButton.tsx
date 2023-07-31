"use client";

// react & next
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

// icons
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";
    return (
        <button
            className="flex items-center gap-3 bg-[#e5e5e5] p-3 rounded-full"
            onClick={() => signIn("google", { callbackUrl })}
        >
            <FcGoogle size={30} />
            <span className="font-bold">Continue with Google</span>
        </button>
    );
};

export default GoogleButton;
