import Red from "../assets/red.png";
import Green from "../assets/green.png";
import White from "../assets/white.png";

export function CardList() {
    return (
        <ul className="grid grid-cols-[375px] lg:grid-cols-[repeat(2,375px)] xl:grid-cols-[repeat(3,375px)] gap-x-2.5 gap-y-7.5 justify-center">
            {cardListData.map((cardData) => (
                <Card key={cardData.name} {...cardData} />
            ))}
        </ul>
    );
}

function Card({ name, description, imageURL, alt }: CardData) {
    return (
        <li className="flex flex-col gap-7.5 max-w-93.75">
            <img src={imageURL} alt={alt} height={300} width={375} />
            <div className="flex flex-col gap-2.5 px-7.5">
                <h2 className="text-[1.3125rem] leading-7.5 font-bold text-center">
                    {name}
                </h2>
                <p className="text-center font-light">{description}</p>
            </div>
        </li>
    );
}

type CardData = {
    name: string;
    description: string;
    imageURL: string;
    alt: string;
};

const cardListData: Array<CardData> = [
    {
        name: "Red",
        description:
            "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
        imageURL: Red,
        alt: "Red food",
    },
    {
        name: "Green",
        description:
            "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
        imageURL: Green,
        alt: "Green food",
    },
    {
        name: "White",
        description:
            "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat. ",
        imageURL: White,
        alt: "White food",
    },
];
