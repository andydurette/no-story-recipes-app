import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { fetchLatestRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";
import { Recipe } from "../types";
import Mixer from "../assets/icons/Mixer";
import RecipeCarousel from "../components/RecipeCarousel";

const Home = ({ navigation }) => {
  const [recipes, setRecipes] = useState<Recipe[] | undefined>();

  useEffect(() => {
    async function getRecipes() {
      const fetchRecipesData = await fetchLatestRecipes();
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
        <View
          style={tw`flex flex-row justify-center mb-5 px-4 pt-2 content-center items-start`}
        >
          <Text
            accessibilityRole="header"
            style={tw`heading1 px-2 text-white pt-4`}
          >
            No <Text style={tw`text-primary-200`}>biographies</Text>, no{" "}
            <Text style={tw`text-primary-200`}>history</Text> lessons, just
            recipes
          </Text>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <Mixer width={225} height={225} />
        </View>
        <View style={tw`pl-4`}>
          <Text style={tw`heading3 text-white`}>Latest Recipes</Text>
        </View>
        {recipes && (
          <View>
            <RecipeCarousel recipes={recipes} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
