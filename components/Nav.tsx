"use client";

// next & react
import { useEffect, useState } from "react";
import Link from "next/link";

// icons
import { BiMenuAltRight, BiUser, BiCart } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

// next auth
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
    const [navActive, setNavActive] = useState(false);
    const [dropDownActive, setDropDownActive] = useState(false);
    const navLinks = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "About",
            url: "/about",
        },
        {
            id: 3,
            title: "Products",
            url: "/products",
        },
        {
            id: 4,
            title: "Feedback",
            url: "/feedback",
        },
    ];
    const [mounted, setMounted] = useState(false);

    const session = useSession();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavActive(false);
        });

        window.addEventListener("click", () => {
            setNavActive(false);
        });

        window.addEventListener("click", () => {
            setDropDownActive(false);
        });

        window.addEventListener("scroll", () => {
            setDropDownActive(false);
        });
    }, [navActive, dropDownActive]);

    return (
        <nav
            className="navContainer shadow-md"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="flex items-center justify-between">
                <Link href="/">
                    <img className="w-[80px]" src="/logo.png" alt="" />
                </Link>
                <div
                    className={
                        navActive
                            ? "absolute top-0 left-0 transition-all z-10 duration-300 right-0 bottom-0 w-full h-1/2 bg-black flex flex-col items-center justify-center gap-2 text-white text-xl md:text-2xl"
                            : "absolute top-[-100%] transition-all duration-300 md:flex md:items-center md:gap-6 font-medium text-xl"
                    }
                >
                    {navLinks.map((link) => (
                        <Link
                            className="text-white no-underline font-semibold"
                            onClick={() => setNavActive(false)}
                            href={link.url}
                            key={link.id}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2 z-10">
                    <button
                        className={
                            navActive ? "text-white  relative" : "text-black"
                        }
                    >
                        <span
                            onClick={() => setDropDownActive(!dropDownActive)}
                        >
                            <BiUser size={25} />
                        </span>

                        <div
                            className={
                                dropDownActive
                                    ? "absolute bg-black p-3 rounded-lg"
                                    : "hidden"
                            }
                        >
                            <div className="flex flex-col gap-1 text-white">
                                <Link
                                    className="text-white no-underline"
                                    href="/"
                                    onClick={() => setDropDownActive(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    className="hover:text-[#f2f3f4] text-white no-underline"
                                    href="/profile"
                                    onClick={() => setDropDownActive(false)}
                                >
                                    Profile
                                </Link>
                                <hr className="m-1" />
                                {session?.data ? (
                                    <Link
                                        onClick={() => {
                                            signOut({ callbackUrl: "/" });
                                            setDropDownActive(false);
                                        }}
                                        href="#"
                                    >
                                        Sign Out
                                    </Link>
                                ) : (
                                    <Link
                                        href="/signin"
                                        onClick={() => setDropDownActive(false)}
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </button>
                    <Link
                        className={navActive ? "text-white" : "text-black"}
                        href="/cart"
                    >
                        <BiCart size={25} />
                    </Link>
                    <button onClick={() => setNavActive(!navActive)}>
                        {navActive ? (
                            <MdClose fill="white" size={35} />
                        ) : (
                            <BiMenuAltRight size={35} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
