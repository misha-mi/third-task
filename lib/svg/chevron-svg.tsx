import { SVGProps } from "react"

const ChevronSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.312 1.5 7 7 7-7"
    />
  </svg>
);

export default ChevronSVG;
