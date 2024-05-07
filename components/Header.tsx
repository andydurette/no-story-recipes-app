import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";
import tw from "../lib/tailwind";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft } from "react-native-feather";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

interface HeaderProps extends NativeStackHeaderProps {
  backBtn?: boolean;
}

interface TabHeaderProps extends BottomTabHeaderProps {
  backBtn?: boolean;
}

const Header = ({
  route,
  options,
  navigation,
  backBtn,
}: HeaderProps | TabHeaderProps) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={tw.style("my-4 relative", Platform.OS === "ios" && "pt-10")}>
      <View>
        {backBtn && (
          <TouchableOpacity
            accessibilityRole="link"
            onPress={() => navigation.goBack()}
            style={tw`absolute left-4`}
          >
            <ChevronLeft width={24} height={24} color="#3b82f6" />
          </TouchableOpacity>
        )}
        <Text
          accessibilityRole="header"
          style={tw`text-xl font-bold text-center w-[75%] self-center`}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
