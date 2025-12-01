import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionsCar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 19v1q0 .424-.287.712A.97.97 0 0 1 5 21H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 20v-8l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5h11q.475 0 .863.275.387.275.537.725l2.1 6v8q0 .424-.288.712A.97.97 0 0 1 20 21h-1a.97.97 0 0 1-.712-.288A.97.97 0 0 1 18 20v-1zm-.2-9h12.4l-1.05-3H6.85zm1.7 6q.624 0 1.063-.437Q9 15.125 9 14.5t-.437-1.062A1.45 1.45 0 0 0 7.5 13q-.625 0-1.062.438A1.45 1.45 0 0 0 6 14.5q0 .624.438 1.063Q6.874 16 7.5 16m9 0q.625 0 1.063-.437Q18 15.125 18 14.5t-.437-1.062A1.45 1.45 0 0 0 16.5 13q-.625 0-1.062.438A1.45 1.45 0 0 0 15 14.5q0 .624.438 1.063.437.437 1.062.437M5 17h14v-5H5z"
    />
  </svg>
);
export default SvgDirectionsCar;
