import * as React from "react";
import type { SVGProps } from "react";
const SvgSwapVert = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 13V5.825L5.425 8.4 4 7l5-5 5 5-1.425 1.4L10 5.825V13zm7 9-5-5 1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17z"
    />
  </svg>
);
export default SvgSwapVert;
