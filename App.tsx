import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "./lib/tailwind";
import Navigation from "./navigation";
import { Platform, View } from "react-native";
import theme from "./lib/theme";

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <View
        style={{
          backgroundColor: theme.colors.black,
          height: Platform.OS === "android" ? 25 : 50,
        }}
      >
        <StatusBar style="light" />
      </View>
      <Navigation />
    </GestureHandlerRootView>
  );
}
