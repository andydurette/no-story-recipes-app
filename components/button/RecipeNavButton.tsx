import tw from "../../lib/tailwind";
import { Text, TouchableOpacity, View } from "react-native";
import theme from "../../lib/theme";
import { ExternalLink } from "react-native-feather";

interface NavButtonProps {
  text: string;
  onPress: () => void;
  external?: boolean;
  borderTop?: boolean;
  textStyle?: string;
}

const RecipeNavButton = ({
  text,
  onPress,
  external = false,
  borderTop = false,
  textStyle,
}: NavButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="link"
      style={tw`flex-row items-center`}
      onPress={onPress}
    >
      <View
        style={tw.style(
          "bg-primary-200 rounded-xl border-b border-gray-300 flex-grow py-3.5 px-5 flex-row justify-between rounded-b-xl rounded-t-none",
          borderTop && "border-t",
        )}
      >
        <Text style={tw.style("paragraph", textStyle)}>{text}</Text>
        {external && (
          <ExternalLink
            stroke={theme.colors.primary[800]}
            width={20}
            height={20}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RecipeNavButton;
