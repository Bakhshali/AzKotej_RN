import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHeart01 = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    // width="26"
    // height="26"
    // fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      // stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
    />
  </Svg>
);
export default SvgHeart01;
