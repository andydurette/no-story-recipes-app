import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { fetchLatestRecipes, fetchRecipes } from "../lib/recipeApiCalls";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import NavButton from "../components/button/NavButton";
import { Recipe } from "../types";
import Mixer from "../assets/icons/Mixer";
import HorizontalCarousel from "../components/HorizontalCarousel";
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
          style={tw`flex flex-row justify-center mb-5 px-4 pt-4 content-center items-start`}
        >
          <Text accessibilityRole="header" style={tw`heading1 p-2 text-white `}>
            No <Text style={tw`text-primary-100`}>biographies</Text>, no{" "}
            <Text style={tw`text-primary-100`}>history</Text> lessons, just
            recipes
          </Text>
        </View>

        <View style={tw`flex flex-row justify-center mb-5 p-2`}>
          <Mixer width={300} height={300} />
        </View>
        <View style={tw`flex-row justify-between mb-5 p-2 items-center `}>
          <Text accessibilityRole="header" style={tw`heading3 text-white p-2`}>
            Latest Recipes
          </Text>
        </View>
        <View>
          <HorizontalCarousel />
        </View>
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
