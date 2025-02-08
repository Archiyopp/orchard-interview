import { CardList } from "./components/CardList";
import { Headline } from "./components/TItle";

function App() {
    return (
        <section className="bg-bg text-white h-svh font-open-sans overflow-auto">
            <article className="flex flex-col gap-7.5 py-30 px-36.75">
                <Headline>What does cooking mean?</Headline>
            </article>
            <article className="flex flex-col gap-7.5 py-30 px-36.75">
                <Headline>Taste the colours</Headline>
                <CardList />
            </article>
        </section>
    );
}

export default App;
