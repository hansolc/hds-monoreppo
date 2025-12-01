import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#1D1B20" d="M8 19V5l11 7zm2-3.65L15.25 12 10 8.65z" />
  </svg>
);
export default SvgPlayArrow;
