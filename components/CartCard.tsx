"use client";
// context
import { useCart } from "@/app/Context/CartContext";
import { useProduct } from "@/app/Context/ProductContext";

// icons
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

// types
import { Product } from "@/types/interfaces";

interface CartCardProps {
    id: number;
    quantity: number;
}

export default function CartCard({ id, quantity }: CartCardProps) {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
        useCart();
    const { products } = useProduct();
    const item = products?.find((x: Product) => x.id === id);
    if (item == null) return null;

    const total = Number(item.price) * quantity;
    return (
        <>
            <div className="flex gap-4 justify-center items-center">
                <img
                    className="border-2 p-2 w-[100px] h-[120px] rounded object-cover shadow-sm"
                    src={item.image}
                    alt="ProductImg"
                />
                <div className="flex flex-col">
                    <div className="flex flex-col  gap-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg uppercase">
                                {item.title.substring(0, 16)}
                            </h3>
                            <button
                                onClick={() => removeFromCart(id)}
                                className="ml-4 text-gray-600"
                            >
                                <AiOutlineClose size={23} />
                            </button>
                        </div>
                        <p className="uppercase text-gray-400">
                            quantity: {quantity}
                        </p>
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold  text-xl">
                                {`$${total.toFixed(2)}`}
                            </h3>
                            <div className="flex items-center  gap-3">
                                <button
                                    className="rounded-full bg-gray-200 p-2"
                                    onClick={() => decreaseCartQuantity(id)}
                                >
                                    <AiOutlineMinus />
                                </button>
                                <span>{quantity}</span>
                                <button
                                    className="rounded-full bg-gray-200 p-2"
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
