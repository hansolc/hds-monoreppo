import * as React from "react";
import type { SVGProps } from "react";
const SvgSwapHoriz = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1D1B20"
      d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5z"
    />
  </svg>
);
export default SvgSwapHoriz;
