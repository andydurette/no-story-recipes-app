import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { BaseToastProps, default as DefaultToast, ToastShowParams } from 'react-native-toast-message';
import tw from '../../../lib/tailwind';
import { Severity } from '../../../types/alert.types';
import { SeverityIcon, SeverityColorEnum } from '../../icons/SeverityIcon';

interface ToastBaseProps {
	props: BaseToastProps;
	severity: Severity;
}

const ToastBase = ({ props: { text1 }, severity }: ToastBaseProps) => (
	<View style={tw`bg-white flex flex-row mb-6 items-center border card w-11/12 p-0`}>
		<View style={tw`bg-${SeverityColorEnum[severity]}-100 w-10 items-center h-full justify-center`}>
			<SeverityIcon severity={severity} />
		</View>
		<Text style={tw`smallParagraph font-demi mx-5 my-4 flex-shrink`}>{text1}</Text>
	</View>
);

const toastConfig: { [key in Severity]: (props: ToastShowParams) => ReactNode | undefined } = {
	success: (props) => <ToastBase props={props} severity={Severity.Success} />,
	info: (props) => <ToastBase props={props} severity={Severity.Info} />,
	warning: (props) => <ToastBase props={props} severity={Severity.Warning} />,
	danger: (props) => <ToastBase props={props} severity={Severity.Danger} />,
};

const Toast = () => {
	return <DefaultToast config={toastConfig} />;
};

const show = DefaultToast.show;

export { show };

export default Toast;
