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
        <div className="h-[90vh]">
            <div className="flex">
                <Link
                    href="/products"
                    className="flex items-center gap-2 bg-black py-2 px-8 m-8 text-white font-semibold rounded-3xl"
                >
                    Go Back <BsArrowRight size={20} />
                </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-9">
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:gap-36">
                    <img
                        className="w-[120px] md:w-[200px] lg:w-[250px]"
                        src={image}
                        alt="WatchImg"
                    />
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-2xl font-bold text-center">
                            {title}
                        </h1>
                        <p className="text-gray-600 text-center max-w-[350px] lg:max-w-full">
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
