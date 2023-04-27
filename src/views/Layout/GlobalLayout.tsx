import React, { useContext, useEffect } from "react";
import { ScreenContext } from "../../context/screenContext";
import "./globalLayout.scss";

const GlobalLayout = ({ children }) => {
  const { activeOnBlur, showLoader, showModal, showModalNew, setActiveOnBlur } =
    useContext(ScreenContext);

  useEffect(() => {
    if (showLoader || showModal || showModalNew) setActiveOnBlur(true);
    else setActiveOnBlur(false);
  }, [showLoader, showModal, showModalNew, setActiveOnBlur]);

  return (
    <div
      className={activeOnBlur ? "layout-container--blurOn" : "layout-container"}
    >
      {children}
    </div>
  );
};

export default GlobalLayout;
