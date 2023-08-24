import { SVGProps } from "react";

const CopySVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M33 32.999h6v-16H23v6" />
      <path d="M33 22.999H17v16h16v-16Z" />
    </g>
  </svg>
);

export default CopySVG;
