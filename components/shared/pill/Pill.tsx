import { Text, View } from "react-native";
import tw from "../../../lib/tailwind";

interface PillProps {
  type: "primary" | "success" | "gray";
  text: string;
  label?: string;
  a11yLabel?: string;
}

const Pill = ({ type, text, label, a11yLabel }: PillProps) => {
  return (
    <View style={tw`flex items-center flex-row`}>
      <View
        style={tw.style(
          `py-1 px-3 self-start mb-2`,
          `bg-${type}-50`,
          `border border-${type}-200`,
        )}
      >
        <Text
          style={tw`text-center text-${type}-800 smallParagraph leading-tight font-demi`}
        >
          {text}
        </Text>
      </View>
      {label && (
        <View
          style={tw`bg-primary-600 rounded-full w-6 h-6 flex items-center justify-center -ml-3 -mt-8`}
        >
          <Text
            accessibilityLabel={a11yLabel}
            style={tw`smallParagraph font-demi text-white text-center`}
          >
            {label}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Pill;
