// next
import Link from "next/link";

// icons
import { AiOutlineEye } from "react-icons/ai";

// context
import { useCart } from "@/app/Context/CartContext";

// types
import { Product } from "@/types/interfaces";

export default function ProductCard({
    title,
    id,
    price,
    category,
    description,
    image,
    rating,
}: Product) {
    return (
        <div className="flex flex-col justify-center h-[400px] items-center">
            <div className="cursor-pointer relative w-[200px] group border rounded p-3 h-[250px] mb-3">
                <img
                    className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] scale-75 group-hover:scale-110  w-[120px]"
                    src={image}
                    alt="WatchImg"
                />
                <Link
                    href={`/products/${id}`}
                    className="absolute right-0 top-0 bg-black text-white p-2"
                >
                    <AiOutlineEye size={25} />
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <h5 className="uppercase text-gray-500 font-medium">
                    {category}
                </h5>
                <h2 className="uppercase text-center font-semibold max-w-[200px] text-black">
                    {title}
                </h2>
                <span className="font-bold text-lg">${price}</span>
            </div>
        </div>
    );
}
