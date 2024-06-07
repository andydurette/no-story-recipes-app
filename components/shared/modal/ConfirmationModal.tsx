import Modal from "react-native-modal";
import tw from "../../../lib/tailwind";
import { Pressable, Text, View } from "react-native";
import { X } from "react-native-feather";
import theme from "../../../lib/theme";
import HighlightIcon from "../../icons/HighlightIcon";
import { ReactElement } from "react";
import useTranslatedLanguage from "../../../hooks/useTranslatedLanguage";
import { Severity } from "../../../types/alert.types";

interface ConfirmationModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  iconType: Severity;
  title: string;
  children: ReactElement;
  onModalHide?: () => void;
}

const ConfirmationModal = ({
  isVisible,
  toggleModal,
  iconType,
  title,
  children,
  onModalHide,
}: ConfirmationModalProps) => {
  const translate = useTranslatedLanguage();

  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        backdropOpacity={0.5}
        style={tw`justify-center m-0 p-3.5`}
        onModalHide={onModalHide}
      >
        <View style={tw`card border-gray-300 bg-white p-3.5`}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={translate("a11yLabels.closeModal")}
            onPress={toggleModal}
            style={tw`self-end`}
          >
            <X stroke={theme.colors.gray[500]} width={22} height={22} />
          </Pressable>
          <View style={tw`flex items-center`}>
            <HighlightIcon severity={iconType} />
            <Text
              accessibilityRole="header"
              style={tw`heading3 font-sans text-center text-gray-800 py-3 px-3`}
            >
              {title}
            </Text>
          </View>
          {children}
        </View>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
