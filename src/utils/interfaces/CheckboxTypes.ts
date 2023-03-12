import { SetStateAction } from "react";

export type CheckboxType = {
  name: string;
  isChecked: boolean;
  handleIsChecked: React.Dispatch<SetStateAction<boolean>>;
};
