import * as React from "react";
import { SVGProps } from "react";
const EyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.9527 9.70416C18.206 10.0594 18.3327 10.2371 18.3327 10.5C18.3327 10.7629 18.206 10.9406 17.9527 11.2958C16.8143 12.8922 13.907 16.3333 9.99935 16.3333C6.09167 16.3333 3.18443 12.8922 2.04605 11.2958C1.79269 10.9406 1.66602 10.7629 1.66602 10.5C1.66602 10.2371 1.79269 10.0594 2.04605 9.70416C3.18443 8.10786 6.09167 4.66666 9.99935 4.66666C13.907 4.66666 16.8143 8.10786 17.9527 9.70416Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M12.5 10.5C12.5 9.11925 11.3807 8 10 8C8.61925 8 7.5 9.11925 7.5 10.5C7.5 11.8807 8.61925 13 10 13C11.3807 13 12.5 11.8807 12.5 10.5Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);
export default EyeOpen;