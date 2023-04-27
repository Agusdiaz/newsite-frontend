import React, { useContext } from "react";
import { FavouriteSVG, OpenSVG, ShareSVG } from "../../assets/iconsSVG";
import { ScreenContext } from "../../context/screenContext";
import "./tooltipActions.scss";

const TooltipActions = ({ children, openNew, mailInfo }) => {
  const { setShowToast, setToastProps } = useContext(ScreenContext);

  const setFavourite = () => {
    setToastProps(() => ({
      title: null,
      description: "You liked this post!",
      type: "info",
      closeToast: () => {
        setShowToast(false);
      },
    }));
    setShowToast(true);
  };

  return (
    <div className="tooltip-actions-container">
      {children}
      <div className="tooltip-actions-container__inside">
        <OpenSVG width={"1.6rem"} height={"1.6rem"} onClickFunction={openNew} />
        <FavouriteSVG
          width={"1.7rem"}
          height={"1.7rem"}
          onClickFunction={setFavourite}
        />
        <ShareSVG width={"1.4rem"} height={"1.4rem"} mailInfo={mailInfo} />
      </div>
    </div>
  );
};

export default TooltipActions;
