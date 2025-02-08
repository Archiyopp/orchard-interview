import { CardList } from "./components/CardList";

function App() {
    return (
        <section className="bg-bg text-white h-svh">
            <article className="flex flex-col gap-7.5 py-30 px-36.75">
                <h1 className="uppercase text-3xl font-light">
                    What does cooking mean?
                </h1>
            </article>
            <article className="flex flex-col gap-7.5 py-30 px-36.75">
                <h1 className="uppercase text-3xl pb-7.5 border-b w-fit mx-auto font-light">
                    Taste the colours
                </h1>
                <CardList />
            </article>
        </section>
    );
}

export default App;
