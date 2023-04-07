import { SetStateAction } from "react";

export type SearchBarType = {
  placeholder: string;
  onClickFunction: any;
  handleInput: React.Dispatch<SetStateAction<string>>;
};
