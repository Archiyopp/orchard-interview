import { CardList } from "./components/CardList";
import { CookingGallery } from "./components/CookingGallery";
import { cardListData, cookingGalleryData } from "./data";

function App() {
  return (
    <section className="bg-bg text-white h-svh font-open-sans overflow-y-auto overflow-x-hidden px-2">
      <CookingGallery
        title={cookingGalleryData.title}
        galleryImages={cookingGalleryData.galleryImages}
        description={cookingGalleryData.description}
        captionTitle={cookingGalleryData.captionTitle}
        captionText={cookingGalleryData.captionText}
      />
      <CardList title={cardListData.title} listData={cardListData.listData} />
    </section>
  );
}

export default App;
