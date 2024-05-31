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

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <View style={tw`flex flex-row items-center p-2`}>
        <HeaderBackButton label />
        <Text style={tw`text-white text-lg justify-center pl-4`}>
          {recipe.name}
        </Text>
      </View>

      <ScrollView
        persistentScrollbar
        contentContainerStyle={tw`flex-grow justify-between`}
      >
        <View style={tw`flex flex-row justify-center`}></View>
        {/* <View style={tw`flex-row justify-between mb-5 p-2`}>
          <Text accessibilityRole="header" style={tw`heading3 text-white`}>
            Recipe
          </Text>
        </View> */}
        {recipe && (
          <View style={tw`flex justify-center`} key={recipe.id}>
            <Image
              style={tw`w-full h-60 rounded-b-xl`}
              source={recipe.photoURL}
              contentFit="cover"
              transition={1000}
            />
          </View>
        )}

        <View style={tw`flex justify-center m-4 `}>
          <Text style={tw`heading1 text-white`}>Ingredients</Text>
          {recipe &&
            recipe.ingredients.map((r: string, i: number) => {
              return (
                <Text key={`${r}${i}`} style={tw`w-full h-6 text-white`}>
                  {r}
                </Text>
              );
            })}
          <Text style={tw`heading1 text-white`}>Directions</Text>
          {recipe &&
            recipe.directions.map((r: string, i: number) => {
              return (
                <View key={`${r}${i}`}>
                  <Text style={tw`w-full text-white`}>Step {i + 1}</Text>
                  <Text style={tw`w-full text-white`}>{r}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipe;
