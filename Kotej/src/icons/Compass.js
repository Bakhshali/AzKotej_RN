import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgCompass = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    // fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <G
      // stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}>
      <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
      <Path d="M10.5 10.5 16 8l-2.5 5.5L8 16l2.5-5.5Z" />
    </G>
  </Svg>
);
export default SvgCompass;
