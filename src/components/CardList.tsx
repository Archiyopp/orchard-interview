import { useRef } from "react";
import { Headline } from "./Headline";
import { PictureDialog } from "./PictureDialog";
import type { CardData, CardListData } from "../data";
import { AnchorWrapper } from "./AnchorWrapper";
import { GlowingEffect } from "./GlowingEffect";

export function CardList({ title, listData }: CardListData) {
  return (
    <article className="flex flex-col gap-7.5 px-4 py-30 sm:px-34.75">
      <Headline>{title}</Headline>
      <ul
        className="grid grid-cols-1 justify-center gap-x-2.5 gap-y-7.5 sm:grid-cols-[375px] lg:grid-cols-[repeat(2,375px)]
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
    <li className="mx-auto flex max-w-93.75 flex-col gap-7.5">
      <div className="relative">
        <GlowingEffect
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <AnchorWrapper className="block h-75 cursor-pointer overflow-hidden">
          <picture onClick={() => dialogRef.current?.showModal()} className="h-75 overflow-hidden">
            <source srcSet={imageWebP} type="image/webp" />
            <img
              src={imageURL}
              alt={alt}
              height={height}
              width={width}
              className={`${imageClassName ?? ""} h-75 w-full object-cover transition-all duration-300 hover:scale-125`}
            />
          </picture>
        </AnchorWrapper>
      </div>
      <PictureDialog ref={dialogRef} name={name} imageURL={imageURL} alt={alt} imageWebP={imageWebP} />
      <div className="flex flex-col gap-2.5 px-7.5 text-[1.3125rem]">
        <h2 className="text-center leading-7.5 font-bold">{name}</h2>
        <p className="text-center leading-7.5 font-light">{description}</p>
      </div>
    </li>
  );
}
