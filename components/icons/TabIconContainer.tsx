import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";

interface TabIconContainer {
  focused: boolean;
}

const TabIconContainer = ({
  focused,
  children,
}: PropsWithChildren<TabIconContainer>) => {
  return (
    <View style={tw``}>
      {focused && (
        <View style={tw`w-12 absolute -top-2 -left-2 h-1 bg-primary-100`} />
      )}
      <View>{children}</View>
    </View>
  );
};

export default TabIconContainer;
