import Svg, { Path } from 'react-native-svg';
import theme from '../../lib/theme';

const CLSCIcon = () => (
	<Svg width='22' height='23' viewBox='0 0 22 23'>
		<Path
			d='M21 22.5H1c-.6 0-1-.4-1-1v-18c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v18c0 .6-.4 1-1 1zm-6-2h5v-17c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v17h5v-7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v7zm-6 0h4v-6H9v6zm2-10c-.6 0-1-.4-1-1v-1H9c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-.6.4-1 1-1s1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v1c0 .6-.4 1-1 1z'
			fill={theme.colors.primary[800]}
		/>
	</Svg>
);

export default CLSCIcon;
