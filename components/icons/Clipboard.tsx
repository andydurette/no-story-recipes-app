import Svg, { Path } from 'react-native-svg';
import theme from '../../lib/theme';

interface ClipboardIconProps {
	focused?: boolean;
	strokeColor?: string;
}

const ClipboardIcon = ({ focused, strokeColor = 'white' }: ClipboardIconProps) => (
	<Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
		<Path
			d='M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8M15 12H9M9 16H15M9 2H15C15.5523 2 16 2.44772 16 3V5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5V3C8 2.44772 8.44772 2 9 2Z'
			stroke={strokeColor}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		{focused && (
			<>
				<Path
					d='M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z'
					fill='white'
				/>
				<Path
					d='M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8'
					fill='white'
				/>
				<Path
					d='M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z'
					fill={theme.colors.primary[900]}
				/>
				<Path
					d='M15 12H9M9 16H15'
					stroke={theme.colors.primary[900]}
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</>
		)}
	</Svg>
);

export default ClipboardIcon;
