import { Text, TouchableOpacity } from "react-native";
import tw from "../../../lib/tailwind";
import { ReactElement } from "react";

interface ToggleButtonProps {
  text: string;
  onPress: () => void;
  buttonStyles?: string;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
}

const ToggleButton = ({
  text,
  onPress,
  buttonStyles,
  icon,
  iconPosition = "left",
}: ToggleButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={tw.style("toggleBtn flex-row", buttonStyles)}
    >
      {iconPosition === "left" && icon}
      <Text style={tw`smallParagraph text-gray-700`}>{text}</Text>
      {iconPosition === "right" && icon}
    </TouchableOpacity>
  );
};

export default ToggleButton;
