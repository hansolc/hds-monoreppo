import * as React from "react";
import type { SVGProps } from "react";
const SvgMenuOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 18v-2h13v2zm16.6-1-5-5 5-5L21 8.4 17.4 12l3.6 3.6zM3 13v-2h10v2zm0-5V6h13v2z"
    />
  </svg>
);
export default SvgMenuOpen;
