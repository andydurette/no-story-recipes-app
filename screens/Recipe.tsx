import { SafeAreaView, ScrollView, Text, View } from "react-native";
import tw from "../lib/tailwind";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import HeaderBackButton from "../components/button/HeaderBackButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RecipesStackParamList } from "../navigation/navigation";

type RecipeProps = NativeStackScreenProps<RecipesStackParamList, "Recipe">;

const Recipe = ({ route, navigation }: RecipeProps) => {
  const { recipe } = route.params;

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <HeaderBackButton label />
      <ScrollView
        persistentScrollbar
        contentContainerStyle={tw`flex-grow justify-between`}
      >
        <View style={tw`flex-row justify-between mb-5 p-2`}>
          <Text accessibilityRole="header" style={tw`heading3 text-white`}>
            Recipe
          </Text>
        </View>
        {recipe && (
          <View style={tw`flex justify-center m-4 `} key={recipe.id}>
            <Image
              style={tw`w-full h-60 rounded-xl`}
              source={recipe.photoURL}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Text style={tw`w-full h-6 text-white`}>{recipe.name}</Text>
          </View>
        )}
        <Text>Ingredients</Text>
        <View style={tw`flex justify-center m-4 `}>
          {recipe &&
            recipe.ingredients.map((r: string, i: number) => {
              return (
                <Text key={`${r}${i}`} style={tw`w-full h-6 text-white`}>
                  {r}
                </Text>
              );
            })}
          <Text>Directions</Text>
          {recipe &&
            recipe.ingredients.map((r: string, i: number) => {
              return (
                <View key={`${r}${i}`}>
                  <Text style={tw`w-full h-6 text-white`}>Step {i + 1}</Text>
                  <Text style={tw`w-full h-6 text-white`}>{r}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
