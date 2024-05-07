import Svg, { Path } from 'react-native-svg';
import theme from '../../lib/theme';

const MedicationIcon = () => (
	<Svg width='28' height='28' viewBox='0 0 28 28'>
		<Path fill='none' d='M.5 0h27v27H.5z' />
		<Path
			fill={theme.colors.primary[800]}
			d='m18.5 2.8-.2-.3c-.9-.9-2-1.4-3.3-1.4-1.2 0-2.4.5-3.3 1.4L3 11.3c-.9.9-1.4 2.1-1.4 3.3 0 1.2.5 2.4 1.4 3.3.9.9 2 1.4 3.3 1.4 1.2 0 2.4-.5 3.3-1.4l8.8-8.8c1.6-1.8 1.7-4.5.1-6.3zm-.6 3c0 .7-.2 1.4-.7 1.9L14 10.8c-.4-.4-1.4-1.5-2-2.1-.6-.6-1.7-1.6-2.1-2l3-3c.5-.5 1.3-.8 2-.8.8 0 1.5.3 2 .8.7.6 1 1.3 1 2.1zm-5.2 6.4-4.4 4.4c-.5.5-1.3.8-2 .8-1.6 0-2.9-1.3-2.9-2.9 0-.8.3-1.5.8-2l4.4-4.4 4.1 4.1zM20.8 13.7c-3.7 0-6.6 3-6.6 6.6s3 6.6 6.6 6.6 6.6-3 6.6-6.6-3-6.6-6.6-6.6zm0 1.7c1.7 0 3.2.9 4.1 2.2l-8.9 3v-.3c-.1-2.7 2.1-4.9 4.8-4.9zm0 9.8c-2 0-3.7-1.2-4.5-2.9h.1l9.1-3c.1.3.1.7.1 1.1 0 2.6-2.2 4.8-4.8 4.8z'
		/>
	</Svg>
);

export default MedicationIcon;
