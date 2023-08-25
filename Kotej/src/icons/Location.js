import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const SvgLocation = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // width="24"
    // height="24"
    viewBox="0 0 256 256"
    {...props}>
    <G
      style={{
        stroke: 'white',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'white',
        fillRule: 'nonzero',
        opacity: 1,
      }}>
      <Path
        d="M45 90a3 3 0 0 1-2.583-1.475l-4.471-7.563c-9.222-15.591-17.933-30.317-20.893-36.258a30.788 30.788 0 0 1-3.138-13.62C13.916 13.944 27.86 0 45 0c17.141 0 31.085 13.944 31.085 31.084a30.8 30.8 0 0 1-3.124 13.596l-.063.124c-3.007 6.005-11.672 20.654-20.843 36.159l-4.472 7.563A3 3 0 0 1 45 90zm0-84C31.168 6 19.916 17.253 19.916 31.084c0 3.848.847 7.539 2.518 10.969 2.852 5.721 11.909 21.033 20.667 35.839L45 81.104l1.89-3.196c8.763-14.813 17.823-30.131 20.687-35.879l.035-.067a24.843 24.843 0 0 0 2.474-10.877C70.085 17.253 58.832 6 45 6z"
        style={{
          stroke: 'white',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'white',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
      <Path
        d="M45 44.597c-8.076 0-14.646-6.57-14.646-14.646S36.924 15.306 45 15.306c8.075 0 14.646 6.57 14.646 14.646S53.075 44.597 45 44.597zm0-23.291c-4.767 0-8.646 3.878-8.646 8.646s3.878 8.646 8.646 8.646c4.768 0 8.646-3.878 8.646-8.646S49.768 21.306 45 21.306z"
        style={{
          stroke: 'white',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'white',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </G>
  </Svg>
);
export default SvgLocation;
