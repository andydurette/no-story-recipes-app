import { SafeAreaView, Text, View, Switch } from "react-native";
import tw from "../lib/tailwind";
import { useState } from "react";
import theme from "../lib/theme";
import { useAtom, useSetAtom } from "jotai";
import { recipeSearchQueriesAtom, storeSearchSelectionsAtom } from "../jotai";

const Settings = ({ navigation }) => {
  const [storeSearchSelections, setStoreSearchSelections] = useAtom(
    storeSearchSelectionsAtom,
  );
  const setRecipeSearchQueries = useSetAtom(recipeSearchQueriesAtom);

  const updateSearchStorage = async () => {
    await setStoreSearchSelections(!storeSearchSelections);
    await setRecipeSearchQueries({
      cuisine: "All Cuisine",
      search: "",
    });
  };

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <View style={tw`flex-row justify-between mb-5 p-4`}>
        <Text accessibilityRole="header" style={tw`heading2 text-white`}>
          Settings
        </Text>
      </View>
      <View style={tw`flex-row justify-between p-4`}>
        <View style={tw`w-6/8`}>
          <Text style={tw`text-lg text-white font-bold`}>
            Save Search Selections
          </Text>
          <Text style={tw`paragraph text-white`}>
            The most recent search selections will automatically become the
            default choices for future recipe searches.
          </Text>
        </View>
        <Switch
          style={tw`w-2/8`}
          trackColor={{ false: "#fff", true: `${theme.colors.primary[200]}` }}
          thumbColor={`${theme.colors.primary[100]}`}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => updateSearchStorage()}
          value={storeSearchSelections}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
