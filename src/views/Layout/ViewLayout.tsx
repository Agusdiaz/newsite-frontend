import React from "react";
import "./viewLayout.scss";

const ViewLayout = ({ children }) => {
  return <div className="view-container">{children}</div>;
};

export default ViewLayout;
