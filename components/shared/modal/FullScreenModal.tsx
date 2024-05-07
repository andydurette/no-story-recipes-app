import { ReactElement } from 'react';
import { Platform, Pressable, ScrollView, View } from 'react-native';
import { X } from 'react-native-feather';
import Modal from 'react-native-modal';
import tw from '../../../lib/tailwind';
import theme from '../../../lib/theme';
import useTranslatedLanguage from '../../../hooks/useTranslatedLanguage';

interface FullScreenModalProps {
	isVisible: boolean;
	toggleModal: () => void;
	children: ReactElement;
	onModalHide?: () => void;
}

const FullScreenModal = ({ isVisible, toggleModal, children, onModalHide }: FullScreenModalProps) => {
	const translate = useTranslatedLanguage();

	return (
		<>
			<Modal
				isVisible={isVisible}
				onBackdropPress={toggleModal}
				onSwipeComplete={toggleModal}
				backdropOpacity={0.5}
				onModalHide={onModalHide}
				style={tw`justify-end mx-0 w-full relative my-0 ${Platform.OS === 'ios' ? 'top-18' : 'top-5'}`}
				propagateSwipe
			>
				<View style={tw`bg-white p-5`}>
					<Pressable
						style={tw`self-end`}
						accessibilityRole='button'
						accessibilityLabel={translate('a11yLabels.closeModal')}
						onPress={toggleModal}
					>
						<X stroke={theme.colors.gray[600]} width={30} height={30} onPress={toggleModal} />
					</Pressable>
					<ScrollView contentContainerStyle={tw`pb-12`} contentInset={tw`bottom-20`}>
						{children}
					</ScrollView>
				</View>
			</Modal>
		</>
	);
};

export default FullScreenModal;
