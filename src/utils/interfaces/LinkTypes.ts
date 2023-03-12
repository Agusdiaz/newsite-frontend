import { MouseEventHandler } from "react";

export type LinkType = {
  name: string;
  url: string;
  target: "_blank" | "_parent" | "_self" | "_top";
  onClickFunction?: MouseEventHandler<HTMLAnchorElement>;
};
