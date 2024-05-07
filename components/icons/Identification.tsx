import Svg, { Path } from 'react-native-svg';
import theme from '../../lib/theme';

const Identification = () => (
	<Svg width='24' height='24'>
		<Path
			d='M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
			stroke={theme.colors.primary[800]}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<Path
			d='M13 17.444v-1.222c0-.648-.253-1.27-.703-1.728a2.378 2.378 0 0 0-1.697-.716H6.4c-.637 0-1.247.257-1.697.716A2.468 2.468 0 0 0 4 16.222v1.222m6.9-8c0 1.35-1.075 2.445-2.4 2.445s-2.4-1.095-2.4-2.445C6.1 8.094 7.175 7 8.5 7s2.4 1.094 2.4 2.444ZM18 10h-3M20 13h-5'
			stroke={theme.colors.primary[800]}
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
);

export default Identification;
