import * as React from "react";
import type { SVGProps } from "react";
const SvgVideocam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 20a2 2 0 0 1-1.425-.575A2 2 0 0 1 2 18V6q0-.825.575-1.4Q3.175 4 4 4h12q.825 0 1.4.6.6.575.6 1.4v4.5l4-4v11l-4-4V18q0 .825-.6 1.425Q16.825 20 16 20zm0-2h12V6H4zm0 0V6z"
    />
  </svg>
);
export default SvgVideocam;
