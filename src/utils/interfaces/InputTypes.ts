import { SetStateAction } from "react";

export type InputType = {
  name: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  handleInput: React.Dispatch<SetStateAction<string>>;
  parentFunction?: any;
  showError?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
};
