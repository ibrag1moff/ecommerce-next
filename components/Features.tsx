// icons
import { BiSolidUserCheck } from "react-icons/bi";

export default function Features() {
    return (
        <div className="py-20">
            <div className="flex flex-col gap-2 items-center mb-8">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Our Features
                </h2>
                <p className="text-medium text-gray-600">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center lg:items-end">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-end">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-end">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="w-[350px]  h-[350px] object-cover"
                        src="/features.png"
                        alt="Features"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center lg:items-start">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <BiSolidUserCheck size={60} />
                        <h2 className="font-semibold text-xl mb-2">
                            Comfortable & Secure
                        </h2>
                        <p className="max-w-[300px] text-center text-gray-600 lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, molestias!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
