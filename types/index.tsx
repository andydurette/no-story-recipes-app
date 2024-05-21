export enum cuisineEnum {
  asian = "asian",
  mexican = "mexican",
  american = "american",
}

export interface Recipe {
  id: string;
  displayUrl: string;
  cuisine: cuisineEnum;
  description: string;
  directions: string[];
  ingredients: string[];
  name: string;
  photoURL: string;
}
