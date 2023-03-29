import React from "react";
import { FavouriteSVG, OpenSVG, ShareSVG } from "../../assets/iconsSVG";
import "./tooltipActions.scss";

const TooltipActions = ({ children }) => {
  return (
    <div className="tooltip-actions-container">
      {children}
      <div className="tooltip-actions-container__inside">
        <OpenSVG width={"1.6rem"} height={"1.6rem"} />
        <FavouriteSVG width={"1.7rem"} height={"1.7rem"} />
        <ShareSVG width={"1.4rem"} height={"1.4rem"} />
      </div>
    </div>
  );
};

export default TooltipActions;
