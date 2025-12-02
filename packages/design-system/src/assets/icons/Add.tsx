import * as React from "react";
import type { SVGProps } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#1D1B20" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
  </svg>
);
export default SvgAdd;
