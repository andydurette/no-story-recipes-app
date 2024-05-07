import Svg, { Path } from 'react-native-svg';
import tw from '../../lib/tailwind';

interface WalletIconProps {
  focused: boolean;
}

const WalletIcon = ({ focused }: WalletIconProps) => (
  <Svg fill='none' viewBox='0 0 24 24' stroke={focused ? '#3b82f6' : '#9ca3af'} style={tw`w-8 h-8`}>
    <Path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
    />
  </Svg>
);

export default WalletIcon;
