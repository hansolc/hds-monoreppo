import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 21q-1.65 0-2.825-1.175T6 17t1.175-2.825T10 13q.574 0 1.05.15.5.125.95.4V3h6v4h-4v10q0 1.65-1.175 2.825T10 21"
    />
  </svg>
);
export default SvgMusicNote;
