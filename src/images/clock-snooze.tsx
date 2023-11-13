import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SleepIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 17h5l-5 5h5m.45-9c.033-.329.05-.662.05-1 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10.11 10.11 0 0 0 1-.05M12 6v6l3.738 1.87"
    />
  </Svg>
)
export default SleepIcon
