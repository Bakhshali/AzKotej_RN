import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCloseMd = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
    />
  </Svg>
);
export default SvgCloseMd;
