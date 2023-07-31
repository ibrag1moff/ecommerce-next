interface CustomerProps {
    title: string;
    img: string;
    info: string;
}

export default function Customer({ title, img, info }: CustomerProps) {
    return (
        <div className="flex flex-col items-center">
            <img
                className="w-[150px] h-[150px] object-cover mb-2 rounded-full"
                src={img}
                alt="CustomerImg"
            />
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="max-w-[300px] text-center">{info}</p>
            </div>
        </div>
    );
}
