import tw from '../../lib/tailwind';
import { View } from 'react-native';
import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'react-native-feather';
import theme from '../../lib/theme';
import { Severity } from '../../types/alert.types';

interface HighlightIconProps {
	severity: Severity;
	size?: 'sm' | 'lg';
}

const HighlightIcon = ({ severity, size = 'sm' }: HighlightIconProps) => {
	const sizeMap = {
		sm: { innerCircle: 12, outerCircle: 10, icon: 24 },
		lg: { innerCircle: 24, outerCircle: 20, icon: 48 },
	};

	const color =
		severity === Severity.Success
			? 'success'
			: severity === Severity.Warning
			? 'warning'
			: severity === Severity.Danger
			? 'error'
			: 'primary';

	const Icon =
		severity === Severity.Warning
			? AlertTriangle
			: severity === Severity.Danger
			? AlertCircle
			: severity === Severity.Success
			? CheckCircle
			: Info;

	return (
		<View
			style={tw`bg-${color}-50 rounded-full w-${sizeMap[size].innerCircle} h-${sizeMap[size].innerCircle} flex items-center justify-center`}
		>
			<View
				style={tw`bg-${color}-100 rounded-full w-${sizeMap[size].outerCircle} h-${sizeMap[size].outerCircle} flex items-center justify-center`}
			>
				<Icon
					width={sizeMap[size].icon}
					height={sizeMap[size].icon}
					stroke={theme.colors[color][600]}
					style={tw`mx-auto`}
				/>
			</View>
		</View>
	);
};

export default HighlightIcon;
