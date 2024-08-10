import { RecipeCard, CustomFilter, SearchBar } from "@/components";
import Hero from "@/components/Hero";
import { fetchRecipes } from "@/utils";

export default async function Home() {
  const allRecipes = await fetchRecipes();
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
            <div className="home__filter-container">
              <CustomFilter /* title="fuel" options=""*//>
              <CustomFilter /* title="year" options=""*//>
            </div>
          </div>
          <section>
            <div className="home__cars-wrapper">
              {allRecipes.map((recipe) => (
                <RecipeCard recipe={recipe}/>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
