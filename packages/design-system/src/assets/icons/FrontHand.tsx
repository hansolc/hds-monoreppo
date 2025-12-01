import * as React from "react";
import type { SVGProps } from "react";
const SvgFrontHand = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12V2q0-.424.287-.712A.97.97 0 0 1 13 1q.424 0 .713.288Q14 1.575 14 2v10zm-4 0V3q0-.424.287-.712A.97.97 0 0 1 9 2q.424 0 .713.288Q10 2.575 10 3v9zm4.5 11q-3.55 0-6.025-2.475T4 14.5V5q0-.424.287-.713A.97.97 0 0 1 5 4q.424 0 .713.287Q6 4.576 6 5v9.5q0 2.725 1.888 4.613Q9.775 21 12.5 21t4.613-1.887T19 14.5V11a.97.97 0 0 0-.712.287A.97.97 0 0 0 18 12v4h-3q-.825 0-1.412.587A1.93 1.93 0 0 0 13 18v1h-2v-1q0-1.65 1.175-2.825T15 14h1V4q0-.424.288-.712A.97.97 0 0 1 17 3q.424 0 .712.288Q18 3.575 18 4v5.175q.25-.075.488-.125Q18.725 9 19 9h2v5.5q0 3.55-2.475 6.025T12.5 23"
    />
  </svg>
);
export default SvgFrontHand;
