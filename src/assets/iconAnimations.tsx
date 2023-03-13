import React from "react";
import "./iconAnimations.scss";

const ErrorAnimation: React.FC<React.SVGProps<string>> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width ? width : "3rem"}
      height={height ? height : "3rem"}
      className="crossmark animateElement"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle
        className="crossmark__circle animateElement"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="cross__path cross__path--right animateElement"
        fill="none"
        d="M16,16 l20,20"
      />
      <path
        className="cross__path cross__path--left animateElement"
        fill="none"
        d="M16,36 l20,-20"
      />
    </svg>
  );
};

export { ErrorAnimation };
