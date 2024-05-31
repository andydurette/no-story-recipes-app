import * as React from "react";
import { View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { SBItem } from "./SBItem";
import SButton from "./SButton";
import { ElementsText, window } from "../constants";
import tw from "../lib/tailwind";

const PAGE_WIDTH = window.width;

const COUNT = 6;

function HorizontalCarousel() {
  const [isVertical, setIsVertical] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH / 2 / COUNT,
        style: {
          height: PAGE_WIDTH / 2,
        },
      } as const)
    : ({
        vertical: false,
        width: PAGE_WIDTH / COUNT,
        height: PAGE_WIDTH / 2,
        style: {
          width: PAGE_WIDTH,
        },
      } as const);

  return (
    <View style={tw`flex-1 pb-4`}>
      <Carousel
        {...baseOptions}
        loop
        width={131}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={[...new Array(12).keys()]}
        renderItem={({ index }) => <SBItem key={index} index={index} />}
      />
      {/* <SButton
        onPress={() => {
          setIsVertical(!isVertical);
        }}
      >
        {isVertical ? "Set horizontal" : "Set Vertical"}
      </SButton>
      <SButton
        onPress={() => {
          setIsFast(!isFast);
        }}
      >
        {isFast ? "NORMAL" : "FAST"}
      </SButton>
      <SButton
        onPress={() => {
          setIsAutoPlay(!isAutoPlay);
        }}
      >
        {ElementsText.AUTOPLAY}:{`${isAutoPlay}`}
      </SButton> */}
    </View>
  );
}

export default HorizontalCarousel;
