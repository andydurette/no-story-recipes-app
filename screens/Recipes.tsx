import { SafeAreaView, ScrollView, Text } from "react-native";
import tw from "../lib/tailwind";
import { CreateRecipe, fetchRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";

const Recipes = ({ navigation }) => {
  type Cuisine = "All Cuisine" | "American" | "Japanese" | "Mexican";

  const [recipes, setRecipes] = useState<CreateRecipe[] | undefined>();
  const [cuisine, setCuisine] = useState<Cuisine>("All Cuisine");
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    async function getRecipes() {
      const cuisineValue = cuisine !== "All Cuisine" ? cuisine : null;
      const fetchRecipesData = await fetchRecipes(cuisineValue, searchInput);
      setRecipes(fetchRecipesData);
    }

    getRecipes();
  }, []);

  return (
    <SafeAreaView style={tw`bg-light-grey flex-1`}>
      <ScrollView style={tw`p-8 px-5`} contentContainerStyle={tw`pb-15`}>
        <Text>Recipes</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
