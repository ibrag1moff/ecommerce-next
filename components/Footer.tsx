// next
import Link from "next/link";

export default function Footer() {
    const footerLinks = [
        {
            id: 1,
            title: "home",
            href: "/",
        },
        {
            id: 2,
            title: "about",
            href: "/about",
        },
        {
            id: 3,
            title: "products",
            href: "/products",
        },
        {
            id: 4,
            title: "feedback",
            href: "/feedback",
        },
    ];
    return (
        <div className="pt-20 mt-4">
            <div className="bg-footerImg bg-cover h-[65vh]">
                <form className="flex flex-col md:flex-row md:px-12 items-center gap-8 justify-center pt-28">
                    <label
                        className="text-white font-bold text-5xl"
                        htmlFor="input"
                    >
                        subscribe
                    </label>
                    <input
                        className="border border-white bg-transparent w-[250px] sm:w-[450px] h-[40px] text-white pl-4"
                        type="text"
                        id="input"
                    />
                    <button className="bg-[#d1c0a8] w-[150px] h-[40px] font-semibold">
                        subscribe
                    </button>
                </form>
            </div>
            <footer className="flex flex-col-reverse md:flex-row md:px-12 gap-12 py-4 items-center justify-between bg-[#151515] h-fit  text-white">
                <div className="flex flex-col md:flex-row gap-8 text-center">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.id}
                            className="font-medium hover:underline text-2xl"
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <Link href="/" className="text-5xl uppercase font-sans">
                    fatima
                </Link>
            </footer>
            <div className="bg-[#f2f3f4] h-[40px]">
                <h3 className="text-center text-black font-medium py-2">
                    2023 by ibrag1moff.All Rights Reserved.
                </h3>
            </div>
        </div>
    );
}
