import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./navigation";
import Home from "../screens/Home";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Index" component={Home} />
    </HomeStack.Navigator>
  );
};
