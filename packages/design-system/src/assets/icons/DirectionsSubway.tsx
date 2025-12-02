import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectionsSubway = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 21v-1l1.5-1q-1.474 0-2.487-1.012T4 15.5V6q0-2.075 1.925-3.037Q7.85 2 12 2q4.3 0 6.15.925Q20 3.851 20 6v9.5q0 1.475-1.012 2.488T16.5 19l1.5 1v1zm0-11h5V7H6zm7 0h5V7h-5zm-4.5 6q.624 0 1.063-.437Q10 15.125 10 14.5t-.437-1.062A1.45 1.45 0 0 0 8.5 13q-.625 0-1.062.438A1.45 1.45 0 0 0 7 14.5q0 .624.438 1.063Q7.875 16 8.5 16m7 0q.624 0 1.063-.437Q17 15.125 17 14.5t-.437-1.062A1.45 1.45 0 0 0 15.5 13q-.625 0-1.062.438A1.45 1.45 0 0 0 14 14.5q0 .624.438 1.063.437.437 1.062.437m-8 1h9q.65 0 1.075-.425T18 15.5V12H6v3.5q0 .65.425 1.075T7.5 17M12 4q-2.15 0-3.562.25Q7.025 4.5 6.45 5h11.2q-.45-.5-1.862-.75T12 4"
    />
  </svg>
);
export default SvgDirectionsSubway;
