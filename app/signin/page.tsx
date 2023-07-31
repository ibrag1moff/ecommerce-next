// components
import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

export default function SignIn() {
    return (
        <div className="flex flex-col gap-8 mb-12 md:flex-row md:justify-evenly md:items-center">
            <div>
                <img
                    className="block marginAuto w-[400px] rounded-e-full my-3 lg:w-[500px]"
                    src="/signin.jpg"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-gray-600">
                        email: demo123@gmail.com
                    </span>
                    <span className="font-bold text-gray-600">
                        password: demo123
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
                    Sign In
                </h1>

                <SignInForm />
                <span className="font-bold py-2 text-lg">or</span>
                <GoogleButton />
            </div>
        </div>
    );
}
