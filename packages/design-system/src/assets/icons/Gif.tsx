import * as React from "react";
import type { SVGProps } from "react";
const SvgGif = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.143 7h2.571v10.286h-2.571zM6.857 7H1.714C.686 7 0 7.857 0 8.714v6.857c0 .858.686 1.715 1.714 1.715h5.143c1.029 0 1.714-.857 1.714-1.715v-3.428H6v2.571H2.571V9.571h6v-.857C8.571 7.857 7.886 7 6.857 7M24 9.571V7h-7.714v10.286h2.571v-3.429h3.429v-2.571h-3.429V9.57z"
    />
  </svg>
);
export default SvgGif;
