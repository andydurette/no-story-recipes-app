import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { fetchRecipes } from "../lib/recipeApiCalls";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import NavButton from "../components/button/NavButton";
import { Recipe } from "../types";
import { useAtom } from "jotai";
import { selectedLatestRecipeAtom } from "../jotai";
import { useFocusEffect } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { ChevronDown, Search } from "react-native-feather";
import { theme } from "../tailwind.config";
import RNPickerSelect from "react-native-picker-select";

const Recipes = ({ navigation }) => {
  type Cuisine = "All Cuisine" | "American" | "Japanese" | "Mexican";

  const [recipes, setRecipes] = useState<Recipe[] | undefined>();
  const [cuisine, setCuisine] = useState<Cuisine>("All Cuisine");
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedLatestRecipe, setSelectedLatestRecipe] = useAtom(
    selectedLatestRecipeAtom
  );

  useEffect(() => {
    async function getRecipes() {
      const cuisineValue = cuisine !== "All Cuisine" ? cuisine : null;
      const fetchRecipesData = await fetchRecipes(cuisineValue, searchInput);
      setRecipes(fetchRecipesData);
    }
    getRecipes();
  }, [searchInput, cuisine]);

  useFocusEffect(
    useCallback(() => {
      if (selectedLatestRecipe)
        navigation.navigate("Recipe", {
          recipe: selectedLatestRecipe,
        });

      return () => {
        setSelectedLatestRecipe(undefined);
      };
    }, [selectedLatestRecipe])
  );

  const handleInputChange = (text: string) => {
    setSearchInput(text);
  };

  const items = [
    {
      label: "Asian",
      value: "asian",
    },
    {
      label: "Mexican",
      value: "mexican",
    },
    {
      label: "American",
      value: "american",
    },
  ];

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
        <View
          style={tw`flex flex-row items-center bg-white border-gray-200 p-2 pr-4 m-4 rounded-sm`}
        >
          <Search color={theme.colors.black} width={22} height={22} />
          <TextInput
            accessibilityLabel="input"
            placeholderTextColor={theme.colors.black}
            style={tw.style("flex-grow pl-1.5 paragraph")}
            placeholder="Search here"
            value={searchInput}
            onChangeText={(text) => handleInputChange(text)}
            returnKeyType="search"
          />
        </View>
        <RNPickerSelect
          placeholder={{ value: undefined, label: "All Cuisine" }}
          useNativeAndroidPickerStyle={false}
          value={cuisine}
          onValueChange={setCuisine}
          items={items}
          style={{
            inputIOS: tw.style(
              "flex py-2 px-8 mx-4 border-white bg-primary-100 rounded-md text-white"
            ),
            inputAndroid: tw.style(
              "flex py-2 px-8 mx-4 border-white bg-primary-100 rounded-md text-white"
            ),
            iconContainer: tw`absolute top-1/3 right-2`,
            placeholder: tw`text-white`,
          }}
          Icon={() => <ChevronDown color={theme.colors.primary[800]} />}
        />
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
