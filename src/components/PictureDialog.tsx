import { Close } from "../assets/icons/close";
import { Headline } from "./Headline";

type Props = {
  ref: React.RefObject<HTMLDialogElement | null>;
  name: string;
  imageURL: string;
  alt: string;
  imageWebP: string;
};
export function PictureDialog({ ref, name, imageURL, alt, imageWebP }: Props) {
  return (
    <dialog
      ref={ref}
      className="bg-bg open:animate-fade-in-scale m-auto px-12 py-9 backdrop:bg-gray-300/30
        open:backdrop:animate-backdrop-fade-in max-w-xl md:max-w-2xl lg:max-w-4xl"
    >
      <div className="relative flex flex-col gap-7.5 text-white">
        <button
          className="absolute right-0 ml-auto flex size-8 items-center justify-center bg-white font-semibold text-black
            transition-colors hover:bg-gray-300"
          onClick={() => ref.current?.close()}
        >
          <span className="sr-only">Close</span>
          <Close aria-hidden />
        </button>
        <Headline>{name}</Headline>
        <picture>
          <source srcSet={imageWebP} type="image/webp" />
          <img src={imageURL} alt={alt} className="h-auto object-cover" />
        </picture>
      </div>
    </dialog>
  );
}
