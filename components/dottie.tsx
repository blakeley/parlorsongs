import { FunctionComponent, SVGProps } from "react";

export const Dottie: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="304" height="200" fill="none" viewBox="0 0 304 200">
    <defs>
      <pattern
        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect
          x="0"
          y="0"
          width="4"
          height="4"
          className="text-gray-300"
          fill="currentColor"
        ></rect>
      </pattern>
    </defs>
    <rect
      width="404"
      height="784"
      fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
    ></rect>
  </svg>
);
