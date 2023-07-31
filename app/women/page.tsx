"use client";
// icons
import { BsArrowDown } from "react-icons/bs";

// components
import ProductCard from "@/components/ProductCard";

// types
import { Product } from "@/types/interfaces";

// context
import { useProduct } from "../Context/ProductContext";

export default async function WomenCollection() {
    const { products } = useProduct();

    const filteredProducts = products.filter((product: Product) => {
        return product.category === "women's clothing";
    });

    return (
        <>
            <div className="bg-womenCollection bg-cover bg-no-repeat h-[70vh]">
                <div className="flex flex-col items-center gap-4 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-90%]">
                    <h1 className="font-bold text-white text-4xl xs:text-5xl md:text-6xl text-center">
                        Women Collection
                    </h1>
                    <a
                        className="bg-[#f2f3f4] p-2 md:p-3 rounded-full hover:bg-[#e5e5e5] transit duration-300"
                        href="#women"
                    >
                        <BsArrowDown size={25} />
                    </a>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-8 py-20 xs:flex-row xs:flex-wrap s:px-[100px] lg:px-[150px] xl:px-[250px]"
                id="women"
            >
                {filteredProducts.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
            </div>
        </>
    );
}
