// components
import ContactForm from "@/components/ContactForm";

export default function Feedback() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="my-8 text-center text-3xl font-black md:text-5xl">
                    Get in touch
                </h3>
                <div className="flex flex-col gap-3 text-center">
                    <h5 className="font-bold text-xl">Send a Message</h5>
                    <p className="text-gray-500 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo quae incidunt facere vitae esse iure.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
