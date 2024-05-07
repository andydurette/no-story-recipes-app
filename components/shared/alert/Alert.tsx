import { Dispatch, ReactElement, SetStateAction } from 'react';
import { Pressable, Text, View } from 'react-native';
import { X } from 'react-native-feather';
import { useAnalytics } from '../../../hooks/useAnalytics';
import tw from '../../../lib/tailwind';
import { i18n } from '../../../locales/translateLanguage';
import { Severity } from '../../../types/alert.types';
import ExternalLinkButton from '../../button/ExternalLinkButton';
import { SeverityIcon, SeverityColorEnum } from '../../icons/SeverityIcon';
import Button from '../button/Button';
import Markdown from '@ronradtke/react-native-markdown-display';

interface AlertProps {
	severity?: Severity;
	title?: string;
	description?: string;
	setAlertVisible?: Dispatch<SetStateAction<boolean>>;
	linkText?: string;
	link?: string;
	onPress?: () => void;
	closable?: boolean;
	shouldOpenNativeBrowser?: boolean;
	styles?: string;
	icon?: ReactElement;
}

const Alert = ({
	severity,
	title,
	description,
	setAlertVisible,
	linkText,
	link,
	onPress,
	closable,
	shouldOpenNativeBrowser,
	styles,
	icon,
}: AlertProps) => {
	const { analyticLinkClickHandler } = useAnalytics();

	return (
		<View accessibilityRole='alert' style={tw.style('card p-0 flex flex-row justify-between mb-6', styles)}>
			<View style={tw`flex flex-row items-center h-full shrink`}>
				<View
					style={tw`bg-${
						severity ? SeverityColorEnum[severity] : SeverityColorEnum.default
					}-100 h-full w-10 items-center py-4`}
				>
					{icon ? icon : <SeverityIcon severity={severity} />}
				</View>
				<View style={tw`p-4 shrink`}>
					{title && (
						<Text accessibilityRole='header' style={tw`paragraph font-demi mb-1`}>
							{title}
						</Text>
					)}
					{description && (
						<View style={tw`-my-2`}>
							<Markdown style={{ body: tw`paragraph text-gray-700` }}>{description}</Markdown>
						</View>
					)}
					{linkText && link ? (
						<View style={tw`mt-5`}>
							<ExternalLinkButton text={linkText} url={link} shouldOpenNativeBrowser={shouldOpenNativeBrowser} />
						</View>
					) : linkText && onPress ? (
						<Button
							type='tertiary'
							text={linkText}
							onPress={onPress}
							buttonStyle='mb-0 mt-2 text-left'
							textStyle='text-left underline smallParagraph font-demi text-gray-800'
						/>
					) : null}
				</View>
			</View>
			{closable && setAlertVisible && (
				<Pressable
					accessibilityRole='button'
					accessibilityLabel={i18n.t('a11yLabel.closeAlert')}
					onPress={() => {
						title && link && analyticLinkClickHandler(title, link);
						setAlertVisible(false);
					}}
					style={tw`p-1`}
				>
					<X width={20} height={20} style={tw`text-gray-900 m-1`} />
				</Pressable>
			)}
		</View>
	);
};

export default Alert;
