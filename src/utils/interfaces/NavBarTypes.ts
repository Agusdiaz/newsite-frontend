import { ReactElement } from "react";

export type NavBarType = {
  name: string;
  path: string;
  component: JSX.Element;
  icon: ReactElement<any, any>;
};
