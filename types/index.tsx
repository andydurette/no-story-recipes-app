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

export interface Recipe {
  recipes: Recipe[] | PromiseLike<Recipe[] | undefined> | undefined;
  id: string;
  displayUrl: string;
  cuisine: CuisineEnum;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
}
