import { Text, View } from 'react-native';
import tw from '../../../lib/tailwind';
import Button from '../button/Button';

interface PromptProps {
	headerText: string;
	title: string;
	description: string;
	linkText: string;
	onPress: () => void;
}

const Prompt = ({ headerText, title, description, linkText, onPress }: PromptProps) => {
	return (
		<View accessibilityRole='alert' style={tw`blueCard p-0 flex flex-row justify-between my-3`}>
			<Text style={tw`blueCardHeader paragraph text-primary-800 font-demi`}>{headerText}</Text>
			<View style={tw`flex flex-row items-center h-full shrink pb-2 pt-4`}>
				<View style={tw`p-4 shrink`}>
					<Text accessibilityRole='header' style={tw`heading5`}>
						{title}
					</Text>
					{description && <Text style={tw`paragraph mt-1 mb-5`}>{description}</Text>}

					<Button text={linkText} type='secondaryAlt' onPress={onPress} />
				</View>
			</View>
		</View>
	);
};

export default Prompt;
