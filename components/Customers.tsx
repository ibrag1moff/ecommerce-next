// components
import Customer from "./Customer";

export default function Customers() {
    const customers = [
        {
            id: 1,
            title: "Richard Salvatore",
            img: "https://media.vogue.fr/photos/5c9b4077488cdc4843df8c05/2:3/w_2560%2Cc_limit/Capture%2520d%25E2%2580%2599e%25CC%2581cran%25202019-03-27%2520a%25CC%2580%252010.20.41.png",
            info: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odio nihil cumque.",
        },
        {
            id: 2,
            title: "Elizabeth Bennet",
            img: "https://i.pinimg.com/736x/c1/5d/02/c15d020633bd1f59d15979ae9219912c.jpg",
            info: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odio nihil cumque.",
        },
        {
            id: 3,
            title: "Walter White",
            img: "https://mediaslide-europe.storage.googleapis.com/mostwanted/pictures/2442/5769/profile-1572433866-80076db988c7e39d2147ab93d7daeb48.jpg?v=1587124111",
            info: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis odio nihil cumque.",
        },
    ];
    return (
        <div className="py-20">
            <div className="flex flex-col gap-2 items-center mb-8">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Customers
                </h2>
                <p className="text-medium text-gray-600">
                    Lorem ipsum dolor sit amet
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-8 sm:flex-row sm:flex-wrap">
                {customers.map((customer) => (
                    <Customer key={customer.id} {...customer} />
                ))}
            </div>
        </div>
    );
}
