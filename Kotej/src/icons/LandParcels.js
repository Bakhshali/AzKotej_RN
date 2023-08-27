import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLandParcels = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="19"
    height="19"
    stroke={"white"}
    fill="black"
    {...props}>
    <Path d="M14.656 6.88 0 16.864l9.952 4.96 12.48-12.256-7.776-2.688zm8.416 2.88-7.424 7.584 7.84 6.304 8.544-10.752-8.96-3.136zM15.2 17.824l-4.48 4.352 9.952 4.96 2.4-2.816-7.872-6.496z" />
  </Svg>
);
export default SvgLandParcels;
