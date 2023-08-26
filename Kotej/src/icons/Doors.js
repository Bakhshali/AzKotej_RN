import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgDoors = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    viewBox="0 0 512 512"
    width="13"
    height="13"
    stroke={"white"}
    fill="white"
    {...props}>
    <Path d="M486.4 494.933h-51.2V8.533c0-5.12-3.413-8.533-8.533-8.533H85.333C80.213 0 76.8 3.413 76.8 8.533v486.4H25.6c-5.12 0-8.533 3.413-8.533 8.533S20.48 512 25.6 512H486.4c5.12 0 8.533-3.413 8.533-8.533s-3.413-8.534-8.533-8.534zm-358.4 0V51.2h256v443.733H128zm273.067 0V42.667c0-5.12-3.413-8.533-8.533-8.533H119.467c-5.12 0-8.533 3.413-8.533 8.533v452.267H93.867V17.067h324.267v477.867h-17.067z" />
    <Path d="M358.4 247.467h-34.133c-5.12 0-8.533 3.413-8.533 8.533v8.533h-17.067c-5.12 0-8.533 3.413-8.533 8.533 0 5.12 3.413 8.533 8.533 8.533h17.067v8.533c0 5.12 3.413 8.533 8.533 8.533H358.4c5.12 0 8.533-3.413 8.533-8.533V256c0-5.12-3.413-8.533-8.533-8.533zm-8.533 34.133H332.8v-17.067h17.067V281.6z" />
  </Svg>
);
export default SvgDoors;
