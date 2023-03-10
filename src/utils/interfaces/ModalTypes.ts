import { ButtonType } from "./ButtonTypes";

export type ModalType = {
  title: string;
  subtitle?: string;
  firstButtonObject?: ButtonType;
  secondButtonObject?: ButtonType;
  closeModal: Function;
};
