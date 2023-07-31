// next
import Link from "next/link";

export default function Categories() {
    return (
        <div
            id="categories"
            className="flex flex-col gap-8 md:flex-row md:gap-4 items-center justify-center py-12 px-1"
        >
            <Link href="/men">
                <div>
                    <img
                        className="w-[500px] h-[500px] object-cover border-2 border-black"
                        src="https://i.pinimg.com/originals/ee/66/82/ee6682a1e4d9d05223e765bc2f2826af.jpg"
                        alt="Men Collection"
                    />
                </div>
                <div className="text-center mt-2">
                    <Link href="/men" className="font-semibold hover:underline">
                        shop men &#62;
                    </Link>
                </div>
            </Link>
            <Link href="/women">
                <img
                    className="w-[500px] h-[500px] object-cover border-2 border-black"
                    src="https://models.bestmodelsagency.com/recursos/clientes/AF80A2F9-5B0B-4FFD-8E2A-1EBBF20D0C93/list.jpg?v1603721418?202203111855"
                    alt="Women Collection"
                />
                <div className="text-center mt-2">
                    <Link
                        href="/women"
                        className="font-semibold hover:underline"
                    >
                        shop women &#62;
                    </Link>
                </div>
            </Link>
        </div>
    );
}
