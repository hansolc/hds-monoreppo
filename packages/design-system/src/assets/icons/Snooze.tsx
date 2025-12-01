import * as React from "react";
import type { SVGProps } from "react";
const SvgSnooze = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.5 15.65h5v-1.5h-2.8L14.5 11V9.65h-5v1.5h2.85l-2.85 3.2zM12 22q-1.874 0-3.512-.712a9.2 9.2 0 0 1-2.85-1.925 9.2 9.2 0 0 1-1.925-2.85A8.7 8.7 0 0 1 3 13q0-1.874.713-3.513a9.2 9.2 0 0 1 1.925-2.85 9.2 9.2 0 0 1 2.85-1.925A8.7 8.7 0 0 1 12 4q1.874 0 3.512.712a9.2 9.2 0 0 1 2.85 1.925 9.2 9.2 0 0 1 1.926 2.85A8.7 8.7 0 0 1 21 13q0 1.874-.712 3.512a9.2 9.2 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.926A8.7 8.7 0 0 1 12 22M5.6 2.35 7 3.75 2.75 8l-1.4-1.4zm12.8 0 4.25 4.25-1.4 1.4L17 3.75z"
    />
  </svg>
);
export default SvgSnooze;
