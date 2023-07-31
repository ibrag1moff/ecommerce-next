"use client";

// phone input
import PhoneInput from "react-phone-number-input/input";

export default function ContactForm() {
    return (
        <form className="flex flex-col gap-8 mb-8">
            <input
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] pb-3"
                type="text"
                placeholder="Name"
            />
            <input
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] pb-3"
                type="email"
                placeholder="Email Address"
            />
            <PhoneInput
                className="font-bold text-black placeholder:text-black outline-none border-b-2 border-[#000] pb-3"
                placeholder="Phone Number"
                onChange={() => null}
            />
            <textarea
                className="font-bold text-black placeholder:text-black resize-none outline-none border-b-2 border-[#000] pb-3"
                placeholder="Message"
                rows={2}
            >
                Message
            </textarea>
            <button className="ml-auto bg-black py-3 px-4 text-white font-regular">
                Submit
            </button>
        </form>
    );
}
