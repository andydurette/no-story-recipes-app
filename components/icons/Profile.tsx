import Svg, { Ellipse, Path } from 'react-native-svg';
import theme from '../../lib/theme';

interface ProfileIconProps {
	focused: boolean;
}

const ProfileIcon = ({ focused }: ProfileIconProps) => (
	<Svg width='25' height='25' viewBox='0 0 25 25' fill='none'>
		{focused ? (
			<>
				<Ellipse cx='12' cy='6.5' rx='6.783' ry='6.5' fill='#fff' />
				<Path d='M23.478 24H1.043c0-6 4.174-9 10.957-9s11.478 3 11.478 9Z' fill={theme.colors.white} />
			</>
		) : (
			<>
				<Path
					d='M12.2 13c-3.7 0-6.8-2.9-6.8-6.5S8.5 0 12.2 0 19 2.9 19 6.5 16 13 12.2 13zm0-11C9.6 2 7.5 4 7.5 6.5S9.6 11 12.2 11 17 9 17 6.5 14.9 2 12.2 2zM24.7 25H.3v-1c0-6.4 4.4-10 12-10 7.8 0 12.5 3.7 12.5 10v1zM2.3 23h20.3c-.6-6.3-7.4-7-10.4-7-4.3 0-9.4 1.2-9.9 7z'
					fill={theme.colors.white}
				/>
			</>
		)}
	</Svg>
);

export default ProfileIcon;
