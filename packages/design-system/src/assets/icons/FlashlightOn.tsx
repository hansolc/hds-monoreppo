import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 22V11L6 8V2h12v6l-2 3v11zm4-6.5q-.625 0-1.062-.437A1.45 1.45 0 0 1 10.5 14q0-.625.438-1.062A1.45 1.45 0 0 1 12 12.5q.624 0 1.063.438.437.437.437 1.062 0 .624-.437 1.063A1.45 1.45 0 0 1 12 15.5M8 5h8V4H8zm8 2H8v.4l2 3V20h4v-9.6l2-3z"
    />
  </svg>
);
export default SvgFlashlightOn;
