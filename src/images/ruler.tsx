import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const RulerIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.636 14.124 1.414 1.414m1.414-4.243L9.88 12.71m1.414-4.243 1.414 1.414m1.414-4.243 1.415 1.415m-12.728 9.9 4.242 4.242L21.192 7.053 16.95 2.81 2.808 16.952Z"
    />
  </Svg>
)
export default RulerIcon