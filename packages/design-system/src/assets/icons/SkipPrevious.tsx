import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.5 18V6h2v12zm13 0-9-6 9-6zm-2-3.75v-4.5L13.1 12z"
    />
  </svg>
);
export default SvgSkipPrevious;
