import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import tw from "../lib/tailwind";
import { fetchRecipes } from "../lib/recipeApiCalls";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import { Recipe, SearchCuisine } from "../types";
import { useAtom, useAtomValue } from "jotai";
import {
  recipeSearchQueriesAtom,
  selectedLatestRecipeAtom,
  storeSearchSelectionsAtom,
} from "../jotai";
import { useFocusEffect } from "@react-navigation/native";
import { TapGestureHandler, TextInput } from "react-native-gesture-handler";
import { ChevronDown, Search } from "react-native-feather";
import { theme } from "../tailwind.config";
import RNPickerSelect from "react-native-picker-select";
import Animated from "react-native-reanimated";
import { useFirstRender } from "../hooks/useFirstRender";

const Recipes = ({ navigation }) => {
  const storeSearchSelections = useAtomValue(storeSearchSelectionsAtom);
  const [recipeSearchQueries, setRecipeSearchQueries] = useAtom(
    recipeSearchQueriesAtom,
  );
  const [recipes, setRecipes] = useState<Recipe[] | undefined>();
  const [cuisine, setCuisine] = useState<SearchCuisine>("All Cuisine");
  const [searchInput, setSearchInput] = useState<string>("");
  const selectedLatestRecipe = useAtomValue(selectedLatestRecipeAtom);

  const firstRender = useFirstRender();

  useEffect(() => {
    if (storeSearchSelections) {
      console.log("did you run?", recipeSearchQueries);
      setSearchInput(recipeSearchQueries.search);
      setCuisine(recipeSearchQueries.cuisine);
    }
  }, [storeSearchSelections]);

  useFocusEffect(
    useCallback(() => {
      if (!firstRender) {
        setRecipeSearchQueries({
          cuisine: cuisine,
          search: searchInput,
        });
      }
    }, [searchInput, cuisine]),
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
      if (selectedLatestRecipe) {
        navigation.navigate("Recipe", {
          recipe: selectedLatestRecipe,
        });
      }
    }, [selectedLatestRecipe]),
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
      <View style={tw`pb-2`}>
        <View
          style={tw`flex flex-row items-center bg-white border-gray-200 p-2 pr-4 m-4 mt-8 rounded-3xl`}
        >
          <Search color={theme.colors.black} width={22} height={22} />
          <TextInput
            accessibilityLabel="input"
            placeholderTextColor={theme.colors.black}
            style={tw.style("flex-grow pl-2 paragraph")}
            placeholder="Search here"
            value={searchInput}
            onChangeText={(text) => handleInputChange(text)}
            returnKeyType="search"
          />
        </View>
        <View style={tw`flex`}>
          {/* <View style={tw`w-8 h-8 bg-primary-100`}></View> */}
          <RNPickerSelect
            placeholder={{ value: undefined, label: "All Cuisine" }}
            useNativeAndroidPickerStyle={false}
            value={cuisine}
            onValueChange={setCuisine}
            items={items}
            style={{
              inputIOS: tw.style(
                "flex py-2 px-8 mx-4 border-white bg-primary-200 rounded-md text-white rounded-3xl",
              ),
              inputAndroid: tw.style(
                "flex py-2 px-3 mx-4 border-white bg-primary-200 rounded-md text-white rounded-3xl",
              ),
              iconContainer: tw`absolute top-1/3 right-2`,
              placeholder: tw`text-white`,
            }}
            Icon={() => (
              <ChevronDown
                color={theme.colors.white}
                style={tw.style("-mt-1 mr-4")}
              />
            )}
          />
        </View>
      </View>
      <ScrollView
        persistentScrollbar
        contentContainerStyle={tw`flex-grow justify-start mt-2 pb-6`}
      >
        {recipes &&
          recipes?.length !== 0 &&
          recipes.map((recipe) => {
            return (
              <TapGestureHandler
                maxDist={10}
                key={recipe.id}
                onActivated={async () => {
                  await navigation.navigate("Recipe", {
                    recipe,
                  });
                }}
              >
                <Animated.View style={tw`flex-1 px-3 min-h-56 max-h-56`}>
                  {recipe.photoURL && (
                    <>
                      <View
                        style={tw`flex-1 justify-center content-center rounded-xl m-1 overflow-hidden min-h-40`}
                      >
                        <ActivityIndicator size="small" />
                        <Image
                          cachePolicy={"memory-disk"}
                          style={tw`absolute w-full h-full`}
                          source={`${recipe.photoURL}`}
                        />
                      </View>
                      <View>
                        <Text style={tw`text-white bottom-0 p-2 min-h-14`}>
                          {recipe.name}
                        </Text>
                      </View>
                    </>
                  )}
                </Animated.View>
              </TapGestureHandler>
            );
          })}
        {recipes?.length === 0 && (
          <View style={tw`flex min-h-full items-center justify-center`}>
            <Text style={tw`text-white bottom-0 p-2 min-h-14 text-xl`}>
              {searchInput
                ? "No Recipes match your current query"
                : "No Recipes found"}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
