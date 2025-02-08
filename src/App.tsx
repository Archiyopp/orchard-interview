import { CardList } from "./components/CardList";
import { CookingGallery } from "./components/CookingGallery";

function App() {
  return (
    <section className="bg-bg text-white h-svh font-open-sans overflow-y-auto overflow-x-hidden px-2">
      <CookingGallery />
      <CardList />
    </section>
  );
}

export default App;
