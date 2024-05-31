import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { fetchRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import NavButton from "../components/button/NavButton";
import { Recipe } from "../types";

const Recipes = ({ navigation }) => {
  type Cuisine = "All Cuisine" | "American" | "Japanese" | "Mexican";

  const [recipes, setRecipes] = useState<Recipe[] | undefined>();
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
    <SafeAreaView style={tw`bg-black flex-1`}>
      <ScrollView
        persistentScrollbar
        contentContainerStyle={tw`flex-grow justify-between`}
      >
        <View style={tw`flex-row justify-between mb-5 p-2`}>
          <Text accessibilityRole="header" style={tw`heading3 text-white`}>
            Recipes
          </Text>
        </View>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <View style={tw`flex justify-center m-4 `} key={recipe.id}>
                <Image
                  style={tw`w-full h-60 rounded-xl`}
                  source={recipe.photoURL}
                  contentFit="cover"
                  transition={1000}
                />
                <NavButton
                  textStyle="text-white"
                  text={recipe.name}
                  onPress={() =>
                    navigation.navigate("Recipe", {
                      recipe,
                    })
                  }
                />
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
