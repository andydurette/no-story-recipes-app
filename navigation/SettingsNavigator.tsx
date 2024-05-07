import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsStackParamList } from "./navigation";
import Settings from "../screens/Settings";

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <SettingsStack.Screen name="Index" component={Settings} />
    </SettingsStack.Navigator>
  );
};
