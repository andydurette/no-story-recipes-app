import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { fetchLatestRecipes, fetchRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import NavButton from "../components/button/NavButton";
import { Recipe } from "../types";
import Mixer from "../assets/icons/Mixer";
import HorizontalCarousel from "../components/RecipeCarousel";
import RecipeCarousel from "../components/RecipeCarousel";
// import mixer from "../assets/mixer.svg";

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
            No <Text style={tw`text-primary-100`}>biographies</Text>, no{" "}
            <Text style={tw`text-primary-100`}>history</Text> lessons, just
            recipes
          </Text>
        </View>
        <View style={tw`flex flex-row justify-center`}>
          <Mixer width={225} height={225} />
        </View>
        <View style={tw`flex-row justify-between px-2  items-center `}>
          <Text accessibilityRole="header" style={tw`heading3 text-white`}>
            Latest Recipes
          </Text>
        </View>
        {recipes && (
          <View>
            <RecipeCarousel recipes={recipes} />
          </View>
        )}

        {/* {recipes &&
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
          })} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
