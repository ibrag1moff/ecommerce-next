// components
import ServiceCard from "./ServiceCard";

// icons
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

export default function Services() {
    const services = [
        {
            id: 1,
            icon: <MdPayment size={60} />,
            title: "100% Secure Payment",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit odit eius",
        },
        {
            id: 2,
            icon: <TbTruckDelivery size={60} />,
            title: "Free Delivery",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit odit eius",
        },
        {
            id: 3,
            icon: <GiReturnArrow size={60} />,
            title: "Return first 14 days",
            info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit odit eius",
        },
    ];
    return (
        <div className="py-20 lg:px-10 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center">
            {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
            ))}
        </div>
    );
}
