export default function About() {
    return (
        <>
            <div className="flex flex-col lg:flex-row  items-center gap-8 lg:pt-12">
                <img
                    className="w-full lg:w-[700px] lg:h-[500px] object-cover"
                    src="https://www.lux-review.com/wp-content/uploads/2020/10/fashion-store.jpg"
                    alt="AboutImg"
                />
                <div>
                    <h5 className="uppercase font-sans font-bold text-center text-2xl mb-4 md:text-3xl">
                        about us
                    </h5>
                    <h1 className="font-bold text-center text-3xl mb-8 md:text-4xl">
                        Baku,Azerbaijan
                    </h1>
                    <p className="text-gray-600 text-center lg:text-left">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque rem incidunt at odit expedita modi,
                            reprehenderit exercitationem, velit impedit libero,
                            amet excepturi sit cum! Neque quam animi itaque aut
                            totam at, reiciendis tempore omnis deserunt aliquid
                            fugit et voluptates explicabo. Est fugiat ut aliquam
                            non, assumenda exercitationem quia delectus
                            similique.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae quod ullam dolor ut minima. Saepe
                            provident aliquam adipisci ut sit!
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
}
