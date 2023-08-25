import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearchMagnifyingGlass = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    // fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      // stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </Svg>
);
export default SvgSearchMagnifyingGlass;
