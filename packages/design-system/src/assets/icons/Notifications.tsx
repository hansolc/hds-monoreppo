import * as React from "react";
import type { SVGProps } from "react";
const SvgNotifications = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19v-2h2v-7q0-2.074 1.25-3.675A5.75 5.75 0 0 1 10.5 4.2v-.7q0-.625.425-1.05Q11.375 2 12 2t1.05.45q.45.425.45 1.05v.7a5.75 5.75 0 0 1 3.25 2.125Q18 7.925 18 10v7h2v2zm8 3a2 2 0 0 1-1.425-.575A2 2 0 0 1 10 20h4q0 .825-.6 1.425Q12.825 22 12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6 9.175 7.175 8 10z"
    />
  </svg>
);
export default SvgNotifications;
