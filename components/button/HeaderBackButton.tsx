import tw from "../../lib/tailwind";
import { ChevronLeft } from "react-native-feather";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "../../navigation/navigation";
import theme from "../../lib/theme";

interface HeaderBackButtonProps {
  onPress?: () => void;
  label?: boolean;
}

const HeaderBackButton = ({ onPress, label }: HeaderBackButtonProps) => {
  const navigation = useNavigation<RootNavigationProp>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      accessibilityRole="link"
      onPress={onPress || goBack}
      style={tw.style("flex-row gap-2", !label && "absolute top-14 left-4")}
    >
      <ChevronLeft width={24} height={24} stroke={theme.colors.white} />
      {label && <Text style={tw` text-white`}>Back</Text>}
    </TouchableOpacity>
  );
};
export default HeaderBackButton;
