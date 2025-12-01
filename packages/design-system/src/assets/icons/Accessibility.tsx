import * as React from "react";
import type { SVGProps } from "react";
const SvgAccessibility = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.412A1.93 1.93 0 0 1 12 2q.825 0 1.412.587Q14 3.176 14 4q0 .824-.588 1.412A1.93 1.93 0 0 1 12 6M9 22V9H3V7h18v2h-6v13h-2v-6h-2v6z"
    />
  </svg>
);
export default SvgAccessibility;
