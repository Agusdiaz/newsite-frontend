import { MouseEventHandler } from "react";

export type ButtonType = {
  title: string;
  onClickFunction: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  type?: "filled" | "empty";
  color?: "default" | "red" | "green";
};
