interface ServiceCardProps {
    id: number;
    icon: any;
    title: string;
    info: string;
}

export default function ServiceCard({
    id,
    icon,
    title,
    info,
}: ServiceCardProps) {
    return (
        <div className="bg-[#f2f3f4] p-4 w-[250px] xs:w-[300px] sm:w-[350px] rounded-xl">
            <div className="flex flex-col items-center gap-1 md:flex-row">
                <div>{icon}</div>
                <div>
                    <h3 className="font-semibold text-xl text-center">
                        {title}
                    </h3>
                    <p className="text-center">{info}</p>
                </div>
            </div>
        </div>
    );
}
