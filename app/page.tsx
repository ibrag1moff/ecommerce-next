// components
import Features from "@/components/Features";
import Services from "@/components/Services";
import Categories from "@/components/Categories";
import Customers from "@/components/Customers";

export default function Home() {
    return (
        <>
            <div className="bg-homeImg bg-cover bg-no-repeat h-[90vh]">
                <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="font-bold text-white text-4xl xs:text-5xl lg:max-w-[480px] lg:text-6xl">
                            New Summer Collection
                        </h1>
                        <a
                            className="bg-[#f2f3f4] py-2 px-8 font-semibold text-black hover:bg-[#e5e5e5] transition-all duration-300"
                            href="#categories"
                        >
                            learn more
                        </a>
                    </div>
                </div>
            </div>
            <Features />
            <Services />
            <Categories />
            <Customers />
        </>
    );
}
