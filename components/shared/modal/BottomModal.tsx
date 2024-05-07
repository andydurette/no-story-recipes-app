import Modal from 'react-native-modal';
import tw from '../../../lib/tailwind';
import { Text, View } from 'react-native';
import { ReactElement } from 'react';

interface BottomModalProps {
	isVisible: boolean;
	toggleModal: () => void;
	title?: string;
	description?: string;
	children: ReactElement;
	onModalHide?: () => void;
}

const BottomModal = ({ isVisible, toggleModal, title, description, children, onModalHide }: BottomModalProps) => {
	return (
		<>
			<Modal
				isVisible={isVisible}
				onBackdropPress={toggleModal}
				onSwipeComplete={toggleModal}
				backdropOpacity={0.5}
				onModalHide={onModalHide}
				style={tw`justify-end mx-0 w-full relative top-5 bottom-0`}
				propagateSwipe
				swipeDirection='down'
				avoidKeyboard
			>
				<View style={tw`bg-white p-4 max-h-11/12`}>
					{title && <Text style={tw`heading3 text-center px-5 py-4`}>{title}</Text>}
					{description && <Text style={tw`paragraph text-gray-500 text-center font-sans pb-6`}>{description}</Text>}
					{children}
				</View>
			</Modal>
		</>
	);
};

export default BottomModal;
