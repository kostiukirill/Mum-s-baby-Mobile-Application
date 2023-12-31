import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const ScalesIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M8 18h8"
    />
    <Path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m15.123 5.52.426.071a2 2 0 0 1 1.528 2.716l-.666 1.664a1.27 1.27 0 0 1-1.486.76 12.06 12.06 0 0 0-5.85 0 1.27 1.27 0 0 1-1.487-.76l-.665-1.664A2 2 0 0 1 8.45 5.59l.425-.07A19 19 0 0 1 11 5.287M10.18 9.929l-.675-1.883"
    />
  </Svg>
);
export default ScalesIcon