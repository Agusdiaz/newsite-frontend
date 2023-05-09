import React, { useContext, useEffect } from "react";
import "./toast.scss";
import { ToastType } from "../../utils/interfaces/ToastTypes";
import { ScreenContext } from "../../context/screenContext";
import { CloseSVG } from "../../assets/iconsSVG";
import isMobileDevice from "../../utils/isMobileDevice";

const Toast = (props: { toastProps: ToastType }) => {
  const { showToast } = useContext(ScreenContext);
  const { title, description, type, closeToast } = props.toastProps;

  const classInside = isMobileDevice()
    ? "toast-container mobile"
    : "toast-container web";

  useEffect(() => {
    const interval = setInterval(() => {
      if (showToast) {
        closeToast();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [closeToast, showToast]);

  return (
    <div className={`${classInside} ${type}`}>
      <div className="toast-container__info">
        <p className="toast-container__info__title">{title}</p>
        <p className="toast-container__info__description">{description}</p>
      </div>
      <CloseSVG
        width={"1.5rem"}
        height={"1.5rem"}
        onClickFunction={() => closeToast()}
      />
    </div>
  );
};

export default Toast;
