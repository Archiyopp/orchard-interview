import Red from "../assets/images/red.png";
import Green from "../assets/images/green.png";
import White from "../assets/images/white.png";
import WhiteWebP from "../assets/images/white.webp";
import RedWebP from "../assets/images/red.webp";
import GreenWebP from "../assets/images/green.webp";
import { Close } from "../assets/icons/close";
import { useRef } from "react";
import { Headline } from "./TItle";

export function CardList() {
  return (
    <ul
      className="grid grid-cols-[375px] justify-center gap-x-2.5 gap-y-7.5 lg:grid-cols-[repeat(2,375px)]
        xl:grid-cols-[repeat(3,375px)]"
    >
      {cardListData.map((cardData) => (
        <Card key={cardData.name} {...cardData} />
      ))}
    </ul>
  );
}

function Card({ name, description, imageURL, alt, imageWebP }: CardData) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <li className="flex max-w-93.75 flex-col gap-7.5">
      <picture onClick={() => dialogRef.current?.showModal()} className="h-75 overflow-hidden">
        <source srcSet={imageWebP} type="image/webp" />
        <img
          src={imageURL}
          alt={alt}
          height={300}
          width={375}
          className="h-75 w-full object-cover hover:scale-125 transition-all hover:opacity-75"
        />
      </picture>
      <dialog
        ref={dialogRef}
        className="bg-bg open:animate-fade-in-scale m-auto px-12 py-9 backdrop:bg-gray-200/40 backdrop:opacity-60
          backdrop:blur-sm"
      >
        <div className="relative flex flex-col gap-7.5 text-white">
          <button
            className="absolute right-0 ml-auto flex size-8 items-center justify-center bg-white font-semibold text-black
              transition-colors hover:bg-gray-300"
            onClick={() => dialogRef.current?.close()}
          >
            <span className="sr-only">Close</span>
            <Close aria-hidden />
          </button>
          <Headline>{name}</Headline>
          <picture>
            <source srcSet={imageWebP} type="image/webp" />
            <img src={imageURL} alt={alt} className="h-75 object-cover" />
          </picture>
        </div>
      </dialog>
      <div className="flex flex-col gap-2.5 px-7.5">
        <h2 className="text-center text-[1.3125rem] leading-7.5 font-bold">{name}</h2>
        <p className="text-center font-light">{description}</p>
      </div>
    </li>
  );
}

type CardData = {
  name: string;
  description: string;
  imageURL: string;
  imageWebP: string;
  alt: string;
};

const cardListData: Array<CardData> = [
  {
    name: "Red",
    description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
    imageURL: Red,
    imageWebP: RedWebP,
    alt: "Red food",
  },
  {
    name: "Green",
    description:
      "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
    imageURL: Green,
    imageWebP: GreenWebP,
    alt: "Green food",
  },
  {
    name: "White",
    description:
      "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat. ",
    imageURL: White,
    imageWebP: WhiteWebP,
    alt: "White food",
  },
];
