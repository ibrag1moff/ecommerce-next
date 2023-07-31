"use client";
// icons
import { BsArrowDown } from "react-icons/bs";

// components
import ProductCard from "@/components/ProductCard";

// context
import { useProduct } from "../Context/ProductContext";

// types
import { Product } from "@/types/interfaces";

export default function MenCollection() {
    const { products } = useProduct();

    const filteredProducts = products.filter((product: Product) => {
        return product.category === "men's clothing";
    });
    return (
        <>
            <div className="bg-menCollection bg-cover bg-no-repeat h-[70vh]">
                <div className="flex flex-col items-center gap-4 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-90%]">
                    <h1 className="font-bold text-white text-4xl xs:text-5xl md:text-6xl text-center">
                        Men Collection
                    </h1>
                    <a
                        className="bg-[#f2f3f4] p-2 md:p-3 rounded-full hover:bg-[#e5e5e5] transit duration-300"
                        href="#men"
                    >
                        <BsArrowDown size={25} />
                    </a>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-8 py-20 xs:flex-row xs:flex-wrap"
                id="men"
            >
                {filteredProducts.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
            </div>
        </>
    );
}
