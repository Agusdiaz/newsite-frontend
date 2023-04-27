export type ToastType = {
  title: string;
  description: string;
  type: "success" | "danger" | "info" | "warning";
  closeToast: Function;
};
