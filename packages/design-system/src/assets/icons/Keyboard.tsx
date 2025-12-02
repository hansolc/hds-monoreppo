import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 19q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 4 5h16q.824 0 1.413.588Q22 6.175 22 7v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 19zm0-2h16V7H4zm4-1h8v-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm3 0h2v-2h-2zM5 10h2V8H5zm3 0h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm3 0h2V8h-2z"
    />
  </svg>
);
export default SvgKeyboard;
