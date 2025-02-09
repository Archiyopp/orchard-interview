import { useRef } from "react";
import { Headline } from "./Headline";
import { PictureDialog } from "./PictureDialog";
import type { CardData, CardListData } from "../data";
import { AnchorWrapper } from "./AnchorWrapper";

export function CardList({ title, listData }: CardListData) {
  return (
    <article className="flex flex-col gap-7.5 py-30 sm:px-34.75 px-10">
      <Headline>{title}</Headline>
      <ul
        className="grid grid-cols-[375px] justify-center gap-x-2.5 gap-y-7.5 lg:grid-cols-[repeat(2,375px)]
          xl:grid-cols-[repeat(3,375px)]"
      >
        {listData.map((cardData) => (
          <Card key={cardData.name} {...cardData} />
        ))}
      </ul>
    </article>
  );
}

function Card({ name, description, imageURL, alt, imageWebP, height, width, imageClassName }: CardData) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <li className="flex max-w-93.75 flex-col gap-7.5">
      <AnchorWrapper className="h-75 overflow-hidden">
        <picture onClick={() => dialogRef.current?.showModal()} className="h-75 overflow-hidden">
          <source srcSet={imageWebP} type="image/webp" />
          <img
            src={imageURL}
            alt={alt}
            height={height}
            width={width}
            className={`${imageClassName ?? ""} h-75 w-full object-cover hover:scale-125 transition-all duration-300 hover:opacity-75`}
          />
        </picture>
      </AnchorWrapper>
      <PictureDialog ref={dialogRef} name={name} imageURL={imageURL} alt={alt} imageWebP={imageWebP} />
      <div className="flex flex-col text-[1.3125rem] gap-2.5 px-7.5">
        <h2 className="text-center leading-7.5 font-bold">{name}</h2>
        <p className="text-center font-light leading-7.5">{description}</p>
      </div>
    </li>
  );
}
