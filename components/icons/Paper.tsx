import Svg, { G, Path } from "react-native-svg";
import theme from "../../lib/theme";

interface SettingsIconProps {
  focused: boolean;
}

const Paper = ({ focused }: SettingsIconProps) => (
  <Svg width="25" height="25" viewBox="0 -960 960 960">
    {focused ? (
      <>
        <Path
          fill={theme.colors.white}
          d="M120-640h720v360q0 50-35 85t-85 35H240q-50 0-85-35t-35-85v-360Zm80 80v280q0 17 11.5 28.5T240-240h480q17 0 28.5-11.5T760-280v-280H200Zm-80-120v-80h240v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h240v80H120Zm360 280Z"
        />
      </>
    ) : (
      <>
        <Path
          fill={theme.colors.white}
          d="M120-640h720v360q0 50-35 85t-85 35H240q-50 0-85-35t-35-85v-360Zm80 80v280q0 17 11.5 28.5T240-240h480q17 0 28.5-11.5T760-280v-280H200Zm-80-120v-80h240v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h240v80H120Zm360 280Z"
        />
      </>
    )}
  </Svg>
);

export default Paper;
