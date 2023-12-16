"use client";

// phone input
import PhoneInput from "react-phone-number-input/input";

export default function ContactForm() {
    return (
        <form className="flex flex-col items-center justify-center gap-8 mb-8">
            <input
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] w-[250px] xs:w-[450px] md:w-[600px] lg:w-[700px] pb-3"
                type="text"
                placeholder="Name"
            />
            <input
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] w-[250px] xs:w-[450px] md:w-[600px] lg:w-[700px] pb-3"
                type="email"
                placeholder="Email Address"
            />
            <PhoneInput
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] w-[250px] xs:w-[450px] md:w-[600px] lg:w-[700px] pb-3"
                placeholder="Phone Number"
                onChange={() => null}
            />
            <textarea
                className="font-bold text-black placeholder:text-black resize-none outline-none border-b-2 border-[#000] w-[250px] xs:w-[450px] md:w-[600px] lg:w-[700px] pb-3"
                placeholder="Message"
                rows={2}
            >
                Message
            </textarea>
            <button className="bg-black py-3 px-4 text-white font-regular">
                Submit
            </button>
        </form>
    );
}
