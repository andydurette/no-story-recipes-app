import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipesStackParamList } from "./navigation";
import Recipes from "../screens/Recipes";

const RecipesStack = createNativeStackNavigator<RecipesStackParamList>();

export const RecipesNavigator = () => {
  return (
    <RecipesStack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <RecipesStack.Screen name="Index" component={Recipes} />
    </RecipesStack.Navigator>
  );
};
