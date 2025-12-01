import * as React from "react";
import type { SVGProps } from "react";
const SvgForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 17-1.425-1.4 4.6-4.6-4.6-4.6L16 5l6 6zM2 19v-4q0-2.075 1.45-3.525Q4.925 10 7 10h6.175l-3.6-3.6L11 5l6 6-6 6-1.425-1.4 3.6-3.6H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 15v4z"
    />
  </svg>
);
export default SvgForward;
