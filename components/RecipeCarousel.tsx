import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselSlide from "./carouselUtils/CarouselSlide";
import tw from "../lib/tailwind";
import { Recipe } from "../types";

function RecipeCarousel({ recipes }: { recipes: Recipe[] }) {
  const dividedWindow = Dimensions.get("window").width / 3;
  const pageWidth = Dimensions.get("window").width;
  return (
    <View style={tw`flex-1 pb-4`}>
      <Carousel
        vertical={false}
        loop
        width={dividedWindow}
        height={pageWidth / 1.65}
        style={tw`w-[${pageWidth}]`}
        data={recipes}
        renderItem={(data) => (
          <CarouselSlide index={data.index + 1} recipe={data.item} />
        )}
      />
    </View>
  );
}

export default RecipeCarousel;
