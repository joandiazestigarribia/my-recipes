export async function fetchRecipes() {
    const url = 'https://recipe-book2.p.rapidapi.com/search-recipes?query=pastas&page=1';
    const headers = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1fd50d7c64msh59b6a188939f7f2p1aef92jsn55c12213b574',
            'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
        }
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    // console.log(result);
    return result;
}

export async function fetchRecipesDetails() {
    const url = 'https://recipe-book2.p.rapidapi.com/recipe-details?path=receta-de-albondigas-de-carne-molida-45979.html';
    const headers = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1fd50d7c64msh59b6a188939f7f2p1aef92jsn55c12213b574',
            'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
        }
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    // console.log(result);
    return result;
}