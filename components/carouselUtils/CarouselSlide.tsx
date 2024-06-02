import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import {
  Gesture,
  GestureDetector,
  LongPressGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, { AnimatedProps } from "react-native-reanimated";
import tw from "../../lib/tailwind";
import { Recipe } from "../../types";
import { Image } from "expo-image";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import textShortener from "../../utils/textShortener";
import { RootNavigationProp } from "../../navigation/navigation";
import { useNavigation } from "@react-navigation/native";
import { selectedLatestRecipeAtom } from "../../jotai";
import { useSetAtom } from "jotai";

interface CarouselSlideProps extends AnimatedProps<ViewProps> {
  index: number;
  recipe: Recipe;
}

const CarouselSlide = ({
  index,
  recipe,
  ...animatedViewProps
}: CarouselSlideProps) => {
  const navigation = useNavigation<RootNavigationProp>();
  const setSelectedLatestRecipe = useSetAtom(selectedLatestRecipeAtom);

  return (
    <TapGestureHandler
      onActivated={async () => {
        await setSelectedLatestRecipe(recipe);
        await navigation.navigate("Recipes");
      }}
    >
      <Animated.View style={tw`flex-1`} {...animatedViewProps}>
        {index && recipe.photoURL && (
          <>
            <View
              style={tw`flex-1 justify-center content-center rounded-xl m-1 overflow-hidden min-h-40`}
            >
              <ActivityIndicator size="small" />
              <Image
                cachePolicy={"memory-disk"}
                style={tw`absolute w-full h-full`}
                source={`${recipe.photoURL}`}
              />
            </View>
            <View>
              <Text
                style={tw`text-white bottom-0 p-2 min-h-14`}
              >{`${textShortener(recipe.name, 15)}`}</Text>
            </View>
          </>
        )}
      </Animated.View>
    </TapGestureHandler>
  );
};

export default CarouselSlide;
