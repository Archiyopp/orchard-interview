import { useRef } from "react";
import Chef from "../assets/images/chef.png";
import ChefWebp from "../assets/images/chef.webp";
import CookingPot from "../assets/images/cooking-pot.png";
import CookingPotWebp from "../assets/images/cooking-pot.webp";
import Eggs from "../assets/images/eggs.png";
import EggsWebp from "../assets/images/eggs.webp";
import { Headline } from "./Headline";
import { PictureDialog } from "./PictureDialog";

export function CookingGallery() {
  return (
    <article className="grid grid-cols-2 xl:grid-cols-[754px_375px] gap-7.5 py-30 sm:px-20.75 lg:px-34.75 px-10 justify-center mx-auto">
      <div className="grid xl:grid-cols-2 col-span-1 grid-rows-2 gap-2.5 justify-center max-w-fit">
        {galleryImages.map((image) => (
          <GalleryPicture key={image.alt} {...image} />
        ))}
      </div>
      <div className="flex flex-col gap-7.5 col-span-1">
        <Headline>What does cooking mean?</Headline>
        <p className="font-light text-[1.3125rem] leading-7.5">
          Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to
          create flavour and make food more appealing? This is just part of what Hervé This, the father of
          molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his
          experiments have told him. And in the process even discovered the secret to cooking the perfect
          egg...
        </p>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-red-title uppercase text-[0.9375rem]">The perfect egg</h3>
          <p className="font-bold text-[1.3125rem]">
            Keep water between 67 and 68°C for a flavourful, tender yolk
          </p>
        </div>
      </div>
    </article>
  );
}

function GalleryPicture({ imgURL, imgWebp, alt, height, pictureClassName, className }: GalleryImage) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <picture
        key={alt}
        className={`${pictureClassName ?? ""} overflow-hidden max-w-93.75 cursor-pointer`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <source srcSet={imgWebp} type="image/webp" />
        <img
          src={imgURL}
          alt={alt}
          height={height}
          className={`${className ?? ""} object-cover hover:scale-125 h-full transition-all duration-300 hover:opacity-75`}
        />
      </picture>
      <PictureDialog ref={dialogRef} name={alt} imageURL={imgURL} alt={alt} imageWebP={imgWebp} />
    </>
  );
}

type GalleryImage = {
  imgURL: string;
  imgWebp: string;
  alt: string;
  height: number;
  pictureClassName?: string;
  className?: string;
};

const galleryImages: Array<GalleryImage> = [
  {
    imgURL: CookingPot,
    imgWebp: CookingPotWebp,
    alt: "Cooking pot",
    height: 600,
    pictureClassName: "row-span-2 h-150",
    // className: "h-150",
  },
  {
    imgURL: Chef,
    imgWebp: ChefWebp,
    alt: "Chef cooking",
    height: 295,
    pictureClassName: "h-73.75",
    // className: "h-73.75",
  },
  {
    imgURL: Eggs,
    imgWebp: EggsWebp,
    alt: "8 Eggs",
    height: 295,
    pictureClassName: "h-73.75",
    // className: "h-73.75",
  },
];
