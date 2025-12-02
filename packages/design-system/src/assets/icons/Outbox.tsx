import * as React from "react";
import type { SVGProps } from "react";
const SvgOutbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 14V9.85l-1.6 1.6L8 10l4-4 4 4-1.4 1.45-1.6-1.6V14zm-6 7a2 2 0 0 1-1.425-.575A2 2 0 0 1 3 19V5q0-.825.575-1.4Q4.175 3 5 3h14q.825 0 1.4.6.6.575.6 1.4v14q0 .825-.6 1.425Q19.825 21 19 21zm0-2h14v-3h-3q-.75.95-1.8 1.475A4.76 4.76 0 0 1 12 18a4.9 4.9 0 0 1-2.225-.525A5.4 5.4 0 0 1 8 16H5zm7-3q.95 0 1.725-.55T14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45T12 16m-7 3h14z"
    />
  </svg>
);
export default SvgOutbox;
