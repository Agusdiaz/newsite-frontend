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

const SettingAnimation: React.FC<React.SVGProps<string>> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width ? width : "3rem"}
      height={height ? height : "3rem"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="settingAnimated"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RefreshAnimation: any = ({ width, height, onClickFunction }) => {
  return (
    <div className="help-text" title="Refresh">
      <svg
        className="refresh-icon"
        width={width ? width : "3rem"}
        height={height ? height : "3rem"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClickFunction}
      >
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
};

const ActionsSVG: any = ({ width, height, onClickFunction }) => {
  return (
    <svg
      className="animated-actions"
      width={width ? width : "2rem"}
      height={height ? height : "2rem"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickFunction}
    >
      <circle className="cls-1" cx="4.19" cy="11.98" r="2" />
      <circle className="cls-1" cx="12" cy="12.02" r="2" />
      <circle className="cls-1" cx="19.81" cy="11.98" r="2" />
    </svg>
  );
};

export { ErrorAnimation, SettingAnimation, RefreshAnimation, ActionsSVG };
