"use client";
// context
import { useCart } from "../Context/CartContext";
import { useProduct } from "../Context/ProductContext";

// components
import CartCard from "@/components/CartCard";

// types
import { Product } from "@/types/interfaces";

export default function Cart() {
    const { cartItems, clearCart } = useCart();
    const { products } = useProduct();
    return (
        <div>
            <div>
                {cartItems.length > 0 ? (
                    <>
                        <h3 className="text-center mt-10 text-4xl font-bold md:text-5xl">
                            Cart
                        </h3>
                        <div className="flex flex-col md:flex-row md:flex-wrap md:gap-12 justify-center items-center gap-8 my-10">
                            {cartItems.map((item) => (
                                <CartCard key={item.id} {...item} />
                            ))}
                        </div>
                        <hr />
                        <div>
                            {cartItems.length > 0 && (
                                <div className="flex items-center justify-around mt-4">
                                    <div className="font-bold text-2xl">
                                        Total: $
                                        {cartItems.reduce((total, cartItem) => {
                                            const item = products.find(
                                                (x: Product) =>
                                                    x.id === cartItem.id
                                            );
                                            const totalPrice =
                                                total +
                                                cartItem.quantity *
                                                    Number(item?.price);

                                            return Math.round(totalPrice);
                                        }, 0)}
                                    </div>
                                    <div>
                                        <button
                                            onClick={clearCart}
                                            className="bg-black px-8 py-2 text-white font-medium"
                                        >
                                            clear all
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <h1 className="flex justify-center my-[200px] text-3xl text-center font-bold sm:text-4xl lg:text-5xl">
                        Your
                        <br /> Cart Is Empty!
                    </h1>
                )}
            </div>
        </div>
    );
}
