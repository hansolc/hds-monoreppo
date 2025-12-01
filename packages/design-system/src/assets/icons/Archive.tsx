import * as React from "react";
import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 18 4-4-1.4-1.4-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14zM5 8v11h14V8zm0 13a2 2 0 0 1-1.425-.575A2 2 0 0 1 3 19V6.525q0-.35.1-.675.125-.325.35-.6L4.7 3.725q.275-.35.675-.525Q5.8 3 6.25 3h11.5q.45 0 .85.2.425.175.7.525l1.25 1.525q.225.274.325.6.125.325.125.675V19q0 .825-.6 1.425Q19.825 21 19 21zm.4-15h13.2l-.85-1H6.25z"
    />
  </svg>
);
export default SvgArchive;
