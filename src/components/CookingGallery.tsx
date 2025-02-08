import { useRef } from "react";
import { Headline } from "./Headline";
import { PictureDialog } from "./PictureDialog";
import type { CookingGalleryData, GalleryImage } from "../data";

export function CookingGallery({
  galleryImages,
  description,
  captionTitle,
  captionText,
}: CookingGalleryData) {
  return (
    <article className="grid grid-cols-2 xl:grid-cols-[754px_375px] gap-7.5 py-30 sm:px-20.75 lg:px-34.75 px-10 justify-center mx-auto">
      <div className="grid xl:grid-cols-2 col-span-1 grid-rows-2 gap-2.5 justify-center max-w-fit">
        {galleryImages.map((image) => (
          <GalleryPicture key={image.alt} {...image} />
        ))}
      </div>
      <div className="flex flex-col gap-7.5 col-span-1">
        <Headline>What does cooking mean?</Headline>
        <p className="font-light text-[1.3125rem] leading-7.5">{description}</p>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-red-title uppercase text-[0.9375rem]">{captionTitle}</h3>
          <p className="font-bold text-[1.3125rem]">{captionText}</p>
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
