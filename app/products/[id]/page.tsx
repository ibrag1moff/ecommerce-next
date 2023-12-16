"use client";
// next
import { useParams } from "next/navigation";
import Link from "next/link";
import Loading from "@/app/loading";

// context
import { useProduct } from "@/app/Context/ProductContext";
import { useCart } from "@/app/Context/CartContext";

// icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

export default function ProductDetails() {
    const { id } = useParams();
    const newId = Number(id);
    const { products } = useProduct();
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useCart();

    const quantity = getItemQuantity(newId);

    const product = products.find((item) => {
        return item.id === newId;
    });

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    const { title, image, price, description } = product;

    return (
        <div>
            <div className="flex">
                <Link
                    href="/products"
                    className="flex items-center gap-2 bg-black py-2 px-8 mx-auto md:mx-0 md:ml-12 mt-8 text-white font-semibold rounded-3xl"
                >
                    Go Back <BsArrowRight size={20} />
                </Link>
            </div>
            <div className="my-[60px]">
                <div className="flex flex-col gap-8 items-center justify-center md:flex-row">
                    <img
                        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                        src={image}
                        alt="WatchImg"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-xl font-bold max-w-[300px] text-center">
                            {title}
                        </h1>
                        <p className="text-gray-600 text-center max-w-[350px] lg:max-w-[500px]">
                            {description.substring(0, 120)}
                        </p>
                        <span className="font-semibold text-2xl">${price}</span>
                        {quantity == 0 ? (
                            <button
                                onClick={() => increaseCartQuantity(newId)}
                                className="bg-black py-2 px-8 text-white font-semibold"
                            >
                                Add to cart
                            </button>
                        ) : (
                            <div className="flex flex-col gap-3 items-center">
                                <div className="flex items-center gap-3">
                                    <button
                                        className="bg-black text-white p-2"
                                        onClick={() =>
                                            decreaseCartQuantity(newId)
                                        }
                                    >
                                        <AiOutlineMinus size={25} />
                                    </button>
                                    <span className="font-bold">
                                        {quantity}
                                    </span>
                                    <button
                                        className="bg-black text-white p-2"
                                        onClick={() =>
                                            increaseCartQuantity(newId)
                                        }
                                    >
                                        <AiOutlinePlus size={25} />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(newId)}
                                    className="bg-black py-2 px-12 text-white font-semibold"
                                >
                                    Remove from cart
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
