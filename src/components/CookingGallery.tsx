"use client";

import { useRef } from "react";
import { Headline } from "./Headline";
import { PictureDialog } from "./PictureDialog";
import type { CookingGalleryData, GalleryImage } from "../data";
import { AnchorWrapper } from "./AnchorWrapper";
import { GlowingEffect } from "./GlowingEffect";

export function CookingGallery({
  galleryImages,
  description,
  captionTitle,
  captionText,
  title,
}: CookingGalleryData) {
  return (
    <article
      className="mx-auto grid justify-center gap-7.5 px-4 py-30 sm:grid-cols-2 sm:px-20.75 lg:px-34.75
        xl:grid-cols-[754px_375px]"
    >
      <div className="order-2 col-span-1 grid max-w-fit justify-center gap-2.5 sm:order-1 xl:grid-cols-2 xl:grid-rows-2">
        {galleryImages.map((image) => (
          <GalleryPicture key={image.alt} {...image} />
        ))}
      </div>
      <div className="order-1 col-span-1 flex flex-col gap-7.5 sm:order-2">
        <Headline>{title}</Headline>
        <p className="text-[1.3125rem] leading-7.5 font-light">{description}</p>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-red-title text-[0.9375rem] uppercase">{captionTitle}</h3>
          <p className="text-[1.3125rem] font-bold">{captionText}</p>
        </div>
      </div>
    </article>
  );
}

function GalleryPicture({ imgURL, imgWebp, alt, height, pictureClassName, className }: GalleryImage) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className={`${pictureClassName ?? ""} relative sm:max-w-93.75`}>
      <GlowingEffect
        borderWidth={2}
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <AnchorWrapper
        className={`${pictureClassName ?? ""} block cursor-pointer overflow-hidden sm:max-w-93.75`}
      >
        <picture
          key={alt}
          className={`${pictureClassName ?? ""} cursor-pointer overflow-hidden sm:max-w-93.75`}
          onClick={() => dialogRef.current?.showModal()}
        >
          <source srcSet={imgWebp} type="image/webp" />
          <img
            src={imgURL}
            alt={alt}
            height={height}
            className={`${className ?? ""} h-full object-cover transition-all duration-300 hover:scale-125`}
          />
        </picture>
      </AnchorWrapper>
      <PictureDialog ref={dialogRef} name={alt} imageURL={imgURL} alt={alt} imageWebP={imgWebp} />
    </div>
  );
}
