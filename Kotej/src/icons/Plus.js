import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}>
    <Path d="M11 11V0h1v11h11v1H12v11h-1V12H0v-1h11z" />
  </Svg>
);
export default SvgPlus;
