import { ReactElement, cloneElement } from "react";
import {
  AccessibilityRole,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "../../../lib/tailwind";
import theme from "../../../lib/theme";

interface ButtonProps {
  text: string;
  type:
    | "primary"
    | "secondary"
    | "secondaryAlt"
    | "danger"
    | "dangerAlt"
    | "grey"
    | "tertiary";
  onPress: () => void;
  icon?: ReactElement;
  iconAlign?: "left" | "right";
  disabled?: boolean;
  shadow?: boolean;
  buttonStyle?: string;
  textStyle?: string;
  a11yRole?: AccessibilityRole;
  a11yHint?: string;
}

const colors = {
  primary: {
    text: "text-white",
    btn: "btnBlue",
    icon: theme.colors.white,
  },
  secondary: {
    text: "text-primary-800",
    btn: "btnWhiteOutline",
    icon: theme.colors.primary[800],
  },
  secondaryAlt: {
    text: "text-primary-800",
    btn: "btnBlueOutline",
    icon: theme.colors.primary[600],
  },
  danger: {
    text: "text-white",
    btn: "btnRed",
    icon: theme.colors.white,
  },
  dangerAlt: {
    text: "text-error-600",
    btn: "btnRedOutline",
    icon: theme.colors.error[600],
  },
  grey: {
    text: "text-gray-800",
    btn: "btnGrayOutline",
    icon: theme.colors.gray[800],
  },
  tertiary: {
    text: "text-primary-800",
    btn: "btnTertiary",
    icon: theme.colors.primary[800],
  },
};

const Button = ({
  text,
  type,
  onPress,
  icon,
  iconAlign = "right",
  disabled = false,
  shadow = false,
  buttonStyle,
  textStyle,
  a11yRole = "button",
  a11yHint,
}: ButtonProps) => {
  const iconWithProps =
    icon &&
    cloneElement(icon, {
      width: 24,
      height: 24,
      stroke: colors[type].icon,
      style: iconAlign === "left" ? tw`-ml-2 mr-2` : tw`-mr-2 ml-2`,
    });

  return (
    <TouchableOpacity
      accessibilityRole={a11yRole}
      accessibilityHint={a11yHint}
      style={tw.style(
        colors[type].btn,
        buttonStyle,
        shadow &&
          (Platform.OS === "ios"
            ? {
                shadowColor: "#101828",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.07,
                elevation: 20,
                shadowRadius: 5,
              }
            : { shadowColor: "#5e6b7e", elevation: 6 }),
      )}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={tw`flex flex-row items-center`}>
        {iconAlign === "left" && iconWithProps}
        <Text
          style={tw.style(
            "btnText",
            colors[type].text,
            icon && iconAlign === "right" && "-ml-2",
            icon && iconAlign === "left" && "-mr-2",
            textStyle,
          )}
        >
          {text}
        </Text>
        {iconAlign === "right" && iconWithProps}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
