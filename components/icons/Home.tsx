import Svg, { Path } from "react-native-svg";
import theme from "../../lib/theme";

interface HomeIconProps {
  focused: boolean;
}

const HomeIcon = ({ focused }: HomeIconProps) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={theme.colors.primary[100]}
  >
    <Path
      d="M8.73333 21.1111V11.5556H14.4667V21.1111M3 8.68889L11.6 2L20.2 8.68889V19.2C20.2 19.7069 19.9987 20.193 19.6402 20.5514C19.2818 20.9098 18.7957 21.1111 18.2889 21.1111H4.91111C4.40425 21.1111 3.91815 20.9098 3.55975 20.5514C3.20135 20.193 3 19.7069 3 19.2V8.68889Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {focused && (
      <>
        <Path
          d="M3 8.68889L11.6 2L20.2 8.68889V19.2C20.2 19.7069 19.9987 20.193 19.6402 20.5514C19.2818 20.9098 18.7957 21.1111 18.2889 21.1111H4.91111C4.40425 21.1111 3.91815 20.9098 3.55975 20.5514C3.20135 20.193 3 19.7069 3 19.2V8.68889Z"
          fill="white"
        />
        <Path d="M8.73333 21.1111V11.5556H14.4667V21.1111" fill="white" />
        <Path
          d="M8.7334 20.6001V11.5557H14.4667V20.6001"
          fill={theme.colors.primary[100]}
        />
        <Path
          d="M8.7334 20.6001V11.5557H14.4667V20.6001H8.7334Z"
          stroke={theme.colors.primary[100]}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </>
    )}
  </Svg>
);

export default HomeIcon;
