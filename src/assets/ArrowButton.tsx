import React from "react";

export const ArrowButton = ({
  height="18px",
  width="24px",
}: React.SVGProps<SVGSVGElement>) => (
  <svg 
  fill="#ffffff" 
  xmlns="http://www.w3.org/2000/svg"  
  viewBox="0 0 18 24" 
  width={width} 
  height={height}
  >
    <path d="M8.25 14.69V6h1.5v8.69l2.72-2.72 1.06 1.06L9 17.56l-4.53-4.53 1.06-1.06 2.72 2.72z" fillRule="evenodd" fillOpacity="0" fill="#fff" stroke="none"></path>
  </svg>
);