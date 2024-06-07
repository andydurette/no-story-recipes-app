import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import EncryptedStorage from "react-native-encrypted-storage";
import { Recipe, SearchCuisine } from "../types";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const storage: any = createJSONStorage(() => EncryptedStorage);

const atomWithSuspense = <T>(key: string, defaultValue: T) =>
  atomWithStorage<T>(
    key,
    storage
      .getItem(key, defaultValue)
      .then((v) => (typeof v === "symbol" ? defaultValue : v))
      .catch(() => defaultValue) as any,
    storage as any,
  );

interface RecipeSearchQueries {
  cuisine: SearchCuisine;
  search: string;
}

const recipeSearchQueriesAtom = atomWithSuspense<RecipeSearchQueries>(
  "searchQuery",
  {
    cuisine: "All Cuisine",
    search: "",
  },
);
const selectedLatestRecipeAtom = atomWithSuspense<Recipe | undefined>(
  "selectedLatestRecipe",
  undefined,
);
const storeSearchSelectionsAtom = atomWithStorage<boolean>(
  "searchSelections",
  false,
  storage,
);

export {
  recipeSearchQueriesAtom,
  selectedLatestRecipeAtom,
  storeSearchSelectionsAtom,
};
