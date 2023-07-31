// next
import { getServerSession } from "next-auth/next";

// config
import { authConfig } from "@/configs/auth";

export default async function Profile() {
    const session = await getServerSession(authConfig);
    return (
        <div className="flex flex-col items-center gap-4 justify-center mt-8 md:flex-row h-[70vh]">
            {session?.user?.image ? (
                <img
                    className="w-[200px] rounded-full border-2 border-black"
                    src={session?.user?.image}
                    alt="Img"
                />
            ) : (
                <img
                    className="w-[250px] rounded-full"
                    src="/user.jpg"
                    alt="Img"
                />
            )}
            <h1 className="font-bold text-xl md:text-2xl">
                Profile of {session?.user?.name}
            </h1>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}
