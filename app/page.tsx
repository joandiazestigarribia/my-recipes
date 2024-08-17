import { SearchBar } from "@/components";
import Hero from "@/components/Hero";
import LoadingData from "@/components/LoadingData";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {


  return (
    <main className="overflow-hidden">
      <div className="">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Recipes Catalogue</h1>
            <p>Explore the recipes you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar />
          </div>
          <section>
            <LoadingData searchParams={searchParams} />
          </section>
        </div>
      </div>
    </main>
  );
}
