import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "./lib/tailwind";
import Navigation from "./navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <StatusBar style="auto" />
      <Navigation />
    </GestureHandlerRootView>
  );
}
