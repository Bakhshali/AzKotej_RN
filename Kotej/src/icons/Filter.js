import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFilter = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="Filter_svg__svg-icon"
    style={{
      width: '1em',
      height: '1em',
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
    }}
    viewBox="0 0 1024 1024"
    width="20"
    height="20"
    {...props}>
    <Path
      fill="white"
      d="M640 288a64 64 0 1 1 .032-128.032A64 64 0 0 1 640 288zm123.456-96c-14.304-55.04-64-96-123.456-96s-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H763.456zM640 864a64 64 0 1 1 .032-128.032A64 64 0 0 1 640 864m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H763.456c-14.304-55.04-64-96-123.456-96m-256-96a64 64 0 1 1 .032-128.032A64 64 0 0 1 384 576m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h132.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H507.456c-14.304-55.04-64-96-123.456-96"
    />
  </Svg>
);
export default SvgFilter;
