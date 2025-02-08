import Red from "./assets/images/red.png";
import Green from "./assets/images/green.png";
import White from "./assets/images/white.png";
import WhiteWebP from "./assets/images/white.webp";
import RedWebP from "./assets/images/red.webp";
import GreenWebP from "./assets/images/green.webp";
import Chef from "./assets/images/chef.png";
import ChefWebp from "./assets/images/chef.webp";
import CookingPot from "./assets/images/cooking-pot.png";
import CookingPotWebp from "./assets/images/cooking-pot.webp";
import Eggs from "./assets/images/eggs.png";
import EggsWebp from "./assets/images/eggs.webp";

export type CookingGalleryData = {
  title: string;
  galleryImages: Array<GalleryImage>;
  description: string;
  captionTitle: string;
  captionText: string;
};

export type GalleryImage = {
  imgURL: string;
  imgWebp: string;
  alt: string;
  height: number;
  pictureClassName?: string;
  className?: string;
};

export const cookingGalleryData = {
  title: "What does cooking mean?",
  galleryImages: [
    {
      imgURL: CookingPot,
      imgWebp: CookingPotWebp,
      alt: "Cooking pot",
      height: 600,
      pictureClassName: "row-span-2 sm:h-150",
    },
    {
      imgURL: Chef,
      imgWebp: ChefWebp,
      alt: "Chef cooking",
      height: 295,
      pictureClassName: "sm:h-73.75",
    },
    {
      imgURL: Eggs,
      imgWebp: EggsWebp,
      alt: "8 Eggs",
      height: 295,
      pictureClassName: "sm:h-73.75",
    },
  ],
  description:
    "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
  captionTitle: "The perfect egg",
  captionText: "Keep water between 67 and 68°C for a flavourful, tender yolk",
};

export type CardListData = {
  title: string;
  listData: Array<CardData>;
};

export type CardData = {
  name: string;
  description: string;
  imageURL: string;
  imageWebP: string;
  alt: string;
  height: number;
  width: number;
  imageClassName?: string;
};

export const cardListData: CardListData = {
  title: "Taste the colours",
  listData: [
    {
      name: "Red",
      description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
      imageURL: Red,
      imageWebP: RedWebP,
      alt: "Red food",
      height: 300,
      width: 375,
      imageClassName: "h-75",
    },
    {
      name: "Green",
      description:
        "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.",
      imageURL: Green,
      imageWebP: GreenWebP,
      alt: "Green food",
      height: 300,
      width: 375,
      imageClassName: "h-75",
    },
    {
      name: "White",
      description:
        "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat. ",
      imageURL: White,
      imageWebP: WhiteWebP,
      alt: "White food",
      height: 300,
      width: 375,
      imageClassName: "h-75",
    },
  ],
};
