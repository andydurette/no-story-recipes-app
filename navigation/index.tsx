import { BottomTabStackParamList } from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";
import tw from "../lib/tailwind";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Header from "../components/Header";
import TabIconContainer from "../components/icons/TabIconContainer";
import { HomeNavigator } from "./HomeNavigator";
import { RecipesNavigator } from "./RecipesNavigator";
import { SettingsNavigator } from "./SettingsNavigator";
import HomeIcon from "../components/icons/Home";
import GearIcon from "../components/icons/Gear";

const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <BottomTabNavigator />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTabStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarStyle: tw.style(Platform.OS === "ios" ? "h-23" : "h-18 pb-3"),
      }}
    >
      <BottomTabStack.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIconContainer focused={focused}>
              <HomeIcon focused={focused} />
            </TabIconContainer>
          ),
        }}
      />

      <BottomTabStack.Screen
        name="Recipes"
        component={RecipesNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          title: "Recipes",
          tabBarIcon: ({ focused }) => (
            <TabIconContainer focused={focused}>
              <GearIcon focused={focused} />
            </TabIconContainer>
          ),
        }}
      />

      <BottomTabStack.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabIconContainer focused={focused}>
              <GearIcon focused={focused} />
            </TabIconContainer>
          ),
        }}
      />
    </BottomTabStack.Navigator>
  );
};

export default Navigation;
