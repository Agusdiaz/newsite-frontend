import { ButtonType } from "./ButtonTypes";

export type ModalType = {
  title: string;
  subtitle?: string;
  firstButtonObject?: ButtonType;
  secondButtonObject?: ButtonType;
  closeModal: Function;
};

export const ModalError: ModalType = {
  title: "An error has occurred",
  subtitle: "Please, try again later.",
  firstButtonObject: {
    type: "filled",
    title: "Close",
    onClickFunction: () => {},
    isDisabled: false,
    color: "red",
  },
  secondButtonObject: undefined,
  closeModal: () => {},
};

export const ModalLoginFailed: ModalType = {
  title: "Ups! Login failed",
  subtitle: "It seems your data is incorrect. Please, try again.",
  firstButtonObject: {
    type: "filled",
    title: "Close",
    onClickFunction: () => {},
    isDisabled: false,
    color: "red",
  },
  secondButtonObject: undefined,
  closeModal: () => {},
};

export const ModalUnavailable: ModalType = {
  title: "This feature is unavailable",
  subtitle: "Cooming soon.",
  firstButtonObject: {
    type: "filled",
    title: "Close",
    onClickFunction: () => {},
    isDisabled: false,
    color: "red",
  },
  secondButtonObject: undefined,
  closeModal: () => {},
};