import { CardList } from "./components/CardList";
import { Headline } from "./components/TItle";

function App() {
  return (
    <section className="bg-bg text-white h-svh font-open-sans overflow-y-auto overflow-x-hidden">
      <article className="flex flex-col gap-7.5 py-30 sm:px-36.75 px-12">
        <Headline>What does cooking mean?</Headline>
      </article>
      <article className="flex flex-col gap-7.5 py-30 sm:px-36.75 px-12">
        <Headline>Taste the colours</Headline>
        <CardList />
      </article>
    </section>
  );
}

export default App;
