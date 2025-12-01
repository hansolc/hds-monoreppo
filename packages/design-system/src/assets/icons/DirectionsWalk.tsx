import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionsWalk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 23 9.8 8.9 8 9.6V13H6V8.3l5.05-2.15q.35-.15.737-.175.388-.025.738.1t.662.35T13.7 7l1 1.6q.65 1.05 1.762 1.725T19 11v2q-1.75 0-3.125-.725a8 8 0 0 1-2.35-1.85L12.9 13.5l2.1 2V23h-2v-6.5l-2.1-1.6L9.1 23zm6.5-17.5q-.825 0-1.412-.588A1.93 1.93 0 0 1 11.5 3.5q0-.824.588-1.412A1.93 1.93 0 0 1 13.5 1.5q.825 0 1.412.587.588.588.588 1.413 0 .824-.588 1.412A1.93 1.93 0 0 1 13.5 5.5"
    />
  </svg>
);
export default SvgDirectionsWalk;
