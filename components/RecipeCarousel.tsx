import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CarouselSlide from "./carouselUtils/CarouselSlide";
import tw from "../lib/tailwind";
import { Recipe } from "../types";

const RecipeCarousel = ({ recipes }: { recipes: Recipe[] }) => {
  const dividedWindow = Dimensions.get("window").width / 3 - 2;
  const pageWidth = Dimensions.get("window").width;
  return (
    <View style={tw`flex-1 pb-4 p-1`}>
      <Carousel
        vertical={false}
        loop={false}
        width={dividedWindow}
        overscrollEnabled={false}
        height={pageWidth / 1.65}
        style={tw`w-[${pageWidth - 8}px] max-w-[${pageWidth - 8}px]`}
        data={recipes}
        renderItem={(data) => (
          <CarouselSlide index={data.index + 1} recipe={data.item} />
        )}
      />
    </View>
  );
};

export default RecipeCarousel;
