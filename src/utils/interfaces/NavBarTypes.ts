import React from "react";

export type NavBarType = {
  name: string;
  path: string;
  component: JSX.Element;
  icon: React.FC<React.SVGProps<string>>;
};
