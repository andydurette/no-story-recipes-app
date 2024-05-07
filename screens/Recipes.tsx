import { SafeAreaView, ScrollView, Text } from "react-native";
import tw from "../lib/tailwind";

const Recipes = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`bg-gray-100 flex-1`}>
      <ScrollView style={tw`p-8 px-5`} contentContainerStyle={tw`pb-15`}>
        <Text>Recipes</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
