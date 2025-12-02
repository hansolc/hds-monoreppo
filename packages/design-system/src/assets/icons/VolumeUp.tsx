import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137T21 11.975t-1.95 5.612T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4 0 1.274-.662 2.363A4.17 4.17 0 0 1 14 16m-4-7.15L7.85 11H5v2h2.85L10 15.15z"
    />
  </svg>
);
export default SvgVolumeUp;
