import Svg, { Path } from 'react-native-svg';
import theme from '../../lib/theme';

const Patient = () => (
	<Svg width='24' height='24' fill='transparent'>
		<Path
			d='M10.498 15h-2.5c-1.395 0-2.093 0-2.66.172A4 4 0 0 0 2.67 17.84c-.172.568-.172 1.265-.172 2.661m15-5.17c-.8-.908-2.134-1.153-3.136-.32-1.002.832-1.143 2.223-.356 3.208.787.984 3.492 3.282 3.492 3.282s2.704-2.298 3.491-3.282a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.587-3.136.322ZM14.998 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
			stroke={theme.colors.primary[900]}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</Svg>
);

export default Patient;
