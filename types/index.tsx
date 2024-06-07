export type SearchCuisine = "All Cuisine" | "american" | "japanese" | "mexican";

export enum CuisineEnum {
  asian = "asian",
  mexican = "mexican",
  american = "american",
}

export interface Recipe {
  id: string;
  displayUrl: string;
  cuisine: CuisineEnum;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
}
