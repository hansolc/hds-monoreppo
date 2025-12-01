import * as React from "react";
import type { SVGProps } from "react";
const SvgMobileFriendly = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 23q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 21V3q0-.824.588-1.412A1.93 1.93 0 0 1 6 1h10q.824 0 1.413.587Q18 2.176 18 3v4h-2V6H6v12h10v-1h2v4q0 .824-.587 1.413A1.93 1.93 0 0 1 16 23zm0-3v1h10v-1zm8.95-4-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4zM6 4h10V3H6z"
    />
  </svg>
);
export default SvgMobileFriendly;
