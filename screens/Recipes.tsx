import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { CreateRecipe, fetchRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

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

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

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
              <View
                style={tw`flex justify-center p-4 border-2-red `}
                key={recipe.id}
              >
                <Image
                  style={tw`w-full h-60 rounded-lg`}
                  source={recipe.photoURL}
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <Text style={tw`w-full h-6 text-white`}>{recipe.name}</Text>
              </View>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
