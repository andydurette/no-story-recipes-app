import { ReactElement } from 'react';
import { CheckCircle, AlertTriangle, AlertCircle, Info } from 'react-native-feather';
import tw from '../../lib/tailwind';
import { Severity } from '../../types/alert.types';

export const SeverityIcon = ({ severity }: { severity?: Severity }): ReactElement => {
	switch (severity) {
		case Severity.Success:
			return <CheckCircle stroke={tw.color('success-600')} width={24} height={24} />;
		case Severity.Warning:
			return <AlertTriangle stroke={tw.color('warning-600')} width={24} height={24} />;
		case Severity.Danger:
			return <AlertCircle stroke={tw.color('error-600')} width={24} height={24} />;
		default:
			return <Info stroke={tw.color('primary-800')} width={24} height={24} />;
	}
};

export enum SeverityColorEnum {
	success = 'success',
	warning = 'warning',
	danger = 'error',
	info = 'primary',
	default = 'gray',
}
