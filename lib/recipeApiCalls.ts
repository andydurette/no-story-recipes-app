import { Recipe } from "../types";
  
  export async function fetchRecipes(
    cuisineQuery: string | null,
    recipeQueryString: string | null
  ): Promise<Recipe[] | undefined> {

    const apiUrl = process.env.EXPO_PUBLIC_BACKEND_URL_PATH;
    let constructUrl = `${
      apiUrl
        ? apiUrl
        : "http://localhost:4000"
    }/recipes/queryRecipes`;
    if (cuisineQuery || recipeQueryString) {
      constructUrl = constructUrl + "?";
    }
    if (cuisineQuery) {
      constructUrl = constructUrl + `cuisineQuery=${cuisineQuery}`;
    }
    if (recipeQueryString) {
      constructUrl = constructUrl + `${cuisineQuery ? `&` : ""}`;
      constructUrl = constructUrl + `recipeQueryString=${recipeQueryString}`;
    }
    try {
      const res = await fetch(constructUrl);
      if (!res.ok) throw new Error("Fetch Recipes error!");
      const data: Recipe[] = await res.json();
      return data;
    } catch (e) {
      if (e instanceof Error) console.log(e.stack);
    }
  }
  
  export async function fetchRecipeByDisplayUrl(
    displayUrl: string
  ): Promise<Recipe | undefined> {
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL_PATH
            ? process.env.NEXT_PUBLIC_BACKEND_URL_PATH
            : "http://localhost:4000"
        }/recipes/displayUrl/${displayUrl}`
      );
      if (!res.ok) throw new Error("Fetch Recipes error!");
      const data: Recipe = await res.json();
      return data;
    } catch (e) {
      if (e instanceof Error) console.log(e.stack);
    }
  }