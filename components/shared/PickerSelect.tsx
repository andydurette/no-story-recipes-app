import RNPickerSelect, {
  Item,
  PickerSelectProps as RnPickerSelectProps,
} from "react-native-picker-select";
import type React from "react";

export interface TypedItem<T> extends Item {
  value: T;
}

interface PickerSelectProps<T> extends RnPickerSelectProps {
  items: TypedItem<T>[];
  onValueChange: (value: T, index: number) => void;
  Icon: RnPickerSelectProps["Icon"] | (() => React.JSX.Element);
}

const PickerSelect = <T,>(props: PickerSelectProps<T>) => {
  return <RNPickerSelect {...props} />;
};

export default PickerSelect;
