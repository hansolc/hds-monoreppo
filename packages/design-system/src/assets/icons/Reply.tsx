import * as React from "react";
import type { SVGProps } from "react";
const SvgReply = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 19v-4q0-1.25-.875-2.125A2.9 2.9 0 0 0 16 12H6.825l3.6 3.6L9 17l-6-6 6-6 1.425 1.4-3.6 3.6H16q2.075 0 3.538 1.463T21 15v4z"
    />
  </svg>
);
export default SvgReply;
