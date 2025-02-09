export type SearchCuisine =
  | "All Cuisine"
  | "AMERICAN"
  | "LATIN_AMERICAN"
  | "EUROPEAN"
  | "ASIAN"
  | "MIDDLE_EASTERN";

export enum CuisineEnum {
  american = "AMERICAN",
  "latin american" = "LATIN_AMERICAN",
  european = "EUROPEAN",
  asian = "asian",
  "middle eastern" = "MIDDLE_EASTERN",
}

export interface RecipeCall {
  count: number;
  recipes: Recipe[];
}

export interface directionsAndIngredientsList {
  for: string;
  ingredientList: string[];
  directionList: string[];
  recipeId: number;
}

export interface Recipe {
  recipes: Recipe[] | PromiseLike<Recipe[] | undefined> | undefined;
  id: string;
  displayUrl: string;
  cuisine: CuisineEnum;
  description: string;
  directionsAndIngredientsList: directionsAndIngredientsList[];
  name: string;
  photoURL: string;
}
