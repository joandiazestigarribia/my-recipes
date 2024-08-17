import { FilterProps, RecipeProps } from "@/types";

export async function fetchRecipes(filter: FilterProps): Promise<{ recipes: RecipeProps[], totalPages: number }> {
    const { newCategory, query, page = 1 } = filter;
    let url = `https://recipe-book2.p.rapidapi.com/search-recipes?page=${page}`;

    const searchTerm = query || newCategory || 'all';
    url += `&query=${encodeURIComponent(searchTerm)}`;

    const headers = {
        'x-rapidapi-key': '1fd50d7c64msh59b6a188939f7f2p1aef92jsn55c12213b574',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
    };

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        let allRecipes: RecipeProps[];
        if (Array.isArray(result)) {
            allRecipes = result;
        } else if (result && Array.isArray(result.results)) {
            allRecipes = result.results;
        } else {
            console.error("Unexpected API response structure:", result);
            allRecipes = [];
        }

        // Calculamos el número total de páginas basado en 8 recetas por página
        const totalPages = Math.ceil(allRecipes.length / 8);

        // Seleccionamos solo 8 recetas para la página actual
        const startIndex = (page - 1) * 8;
        const recipes = allRecipes.slice(startIndex, startIndex + 8);

        return { recipes, totalPages };
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return { recipes: [], totalPages: 1 };
    }
}

export async function fetchRecipesDetails(path: string) {
    const url = `https://recipe-book2.p.rapidapi.com/recipe-details?path=${encodeURIComponent(path)}`;
    const headers = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1fd50d7c64msh59b6a188939f7f2p1aef92jsn55c12213b574',
            'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
        }
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    return result;
}