
import { SVGProps } from "react";

const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.54 1.54 19 10l-8.46 8.46M19 10H1"
    />
  </svg>
);

export default ArrowSVG;

