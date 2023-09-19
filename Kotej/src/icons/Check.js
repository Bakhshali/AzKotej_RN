import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCheck = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z" />
  </Svg>
);
export default SvgCheck;
