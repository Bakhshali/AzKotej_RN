import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgMinus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    {...props}>
    <G
      style={{
        // stroke: 'white',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        // fill: 'white',
        fillRule: 'nonzero',
        opacity: 1,
      }}>
      <Path
        d="M86.5 48.5h-83a3.5 3.5 0 1 1 0-7h83a3.5 3.5 0 1 1 0 7z"
        style={{
          // stroke: 'white',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          // fill: 'white',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
      <Path
        d="M86.5 48.5h-83a3.5 3.5 0 1 1 0-7h83a3.5 3.5 0 1 1 0 7z"
        style={{
          // stroke: 'white',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          // fill: 'white',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </G>
  </Svg>
);
export default SvgMinus;
