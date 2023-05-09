import React, { useContext, useEffect, useRef } from "react";
import "./toast.scss";
import { ToastType } from "../../utils/interfaces/ToastTypes";
import { ScreenContext } from "../../context/screenContext";
import { CloseSVG } from "../../assets/iconsSVG";
import isMobileDevice from "../../utils/isMobileDevice";

const Toast = (props: { toastProps: ToastType }) => {
  const { showToast } = useContext(ScreenContext);
  const { title, description, type, closeToast } = props.toastProps;

  const ref: any = useRef();

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

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <div className={`${classInside} ${type}`} ref={ref} tabIndex={0}>
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
