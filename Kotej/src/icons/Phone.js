import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPhone = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.105 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024L9.502 4.257Z"
    />
  </Svg>
);
export default SvgPhone;
