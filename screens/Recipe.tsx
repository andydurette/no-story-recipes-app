import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { useCallback, useEffect, useState } from "react";
import { Image } from "expo-image";
import HeaderBackButton from "../components/button/HeaderBackButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipesStackParamList } from "../navigation/navigation";
import { useAtom } from "jotai";
import { selectedLatestRecipeAtom } from "../jotai";
import { useFocusEffect } from "@react-navigation/native";
import { Recipe as RecipeType } from "../types";
import { fetchRecipeByDisplayUrl } from "../lib/recipeApiCalls";

type RecipeProps = NativeStackScreenProps<RecipesStackParamList, "Recipe">;

const Recipe = ({ route }: RecipeProps) => {
  const { recipe } = route.params;

  const [selectedLatestRecipe, setSelectedLatestRecipe] = useAtom(
    selectedLatestRecipeAtom
  );
  const [activeRecipe, setActiveRecipe] = useState<RecipeType>();
  const [fullRecipe, setFullRecipe] = useState<RecipeType>();

  const updatedLatestRecipeAtom = async () => {
    await setActiveRecipe(selectedLatestRecipe);
    await setSelectedLatestRecipe(undefined);
  };

  useFocusEffect(
    useCallback(() => {
      setActiveRecipe(recipe);
    }, [recipe])
  );

  useFocusEffect(
    useCallback(() => {
      if (selectedLatestRecipe) {
        updatedLatestRecipeAtom();
      }
    }, [selectedLatestRecipe])
  );

  const setdata = async () => {
    if (activeRecipe) {
      const data = await fetchRecipeByDisplayUrl(activeRecipe?.displayUrl);
      console.log("data", data);
      setFullRecipe(data);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setdata();
    }, [activeRecipe])
  );

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <View style={tw`flex flex-row items-center p-2`}>
        <HeaderBackButton label />
        <Text style={tw`text-white text-lg justify-center pl-4`}>
          {activeRecipe && activeRecipe.name}
        </Text>
      </View>

      <ScrollView
        persistentScrollbar
        contentContainerStyle={tw`flex-grow justify-between`}
      >
        {fullRecipe && (
          <View style={tw`flex justify-center`} key={fullRecipe.id}>
            <Image
              style={tw`w-full h-60 rounded-b-xl`}
              source={fullRecipe.photoURL}
              contentFit="cover"
              transition={1000}
            />
          </View>
        )}

        {/* {/* <View style={tw`flex justify-center m-4`}> */}
        <View style={tw`flex justify-center mb-4 p-2`}>
          <Text style={tw`heading1 text-white mb-2`}>Ingredients</Text>
          {fullRecipe &&
            fullRecipe.directionsAndIngredientsList.map(
              (ingredients: any, i: number) => (
                <View key={i} style={tw`mb-4`}>
                  {fullRecipe &&
                    fullRecipe.directionsAndIngredientsList.length > 1 && (
                      <Text style={tw`w-full text-white heading3 my-2`}>
                        {ingredients.for}
                      </Text>
                    )}

                  {ingredients.ingredientList.map(
                    (r: string, index: number) => (
                      <Text key={`${r}${index}`} style={tw`w-full text-white`}>
                        {r}
                      </Text>
                    )
                  )}
                </View>
              )
            )}
        </View>
        <View style={tw`flex justify-center mb-4 p-2`}>
          <Text style={tw`heading1 text-white`}>Directions</Text>
          {fullRecipe &&
            fullRecipe.directionsAndIngredientsList.map(
              (directions: any, i: number) => (
                <View key={i} style={tw`mb-4`}>
                  {fullRecipe &&
                    fullRecipe.directionsAndIngredientsList.length > 1 && (
                      <Text style={tw`w-full text-white heading3 my-2`}>
                        {directions.for}
                      </Text>
                    )}
                  {directions.directionList.map((r: string, index: number) => (
                    <View key={`${r}${index}`} style={tw`mb-2`}>
                      <Text
                        style={tw`w-full text-white`}
                      >{`${index + 1}. ${r}`}</Text>
                    </View>
                  ))}
                </View>
              )
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
