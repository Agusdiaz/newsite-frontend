import React, { useContext, useEffect } from "react";
import { ScreenContext } from "../../context/screenContext";
import "./generalLayout.scss";

const GeneralLayout = ({ children }) => {
  const { activeOnBlur, showLoader, showModal, setActiveOnBlur } =
    useContext(ScreenContext);

  useEffect(() => {
    if (showLoader || showModal) setActiveOnBlur(true);
    else setActiveOnBlur(false);
  }, [showLoader, showModal, setActiveOnBlur]);

  return (
    <div
      className={activeOnBlur ? "layout-container--blurOn" : "layout-container"}
    >
      {children}
    </div>
  );
};

export default GeneralLayout;
