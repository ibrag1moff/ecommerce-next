"use client";

// components
import ProductCard from "@/components/ProductCard";

// context
import { useProduct } from "../Context/ProductContext";

// types
import { Product } from "@/types/interfaces";

export default function Products() {
    const { products } = useProduct();
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="mt-8 mb-3 text-center text-3xl font-black md:text-5xl">
                    All Products
                </h3>
                <div className="flex flex-col gap-3 text-center">
                    <p className="text-gray-500 mb-4 max-w-[400px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo quae incidunt facere vitae esse iure.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-8 py-20 xs:flex-row xs:flex-wrap s:px-[100px] lg:px-[150px] xl:px-[250px]"
                id="women"
            >
                {products.map((product: Product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
            </div>
        </div>
    );
}
