import React from "react";
import { LinkType } from "../../../utils/interfaces/LinkTypes";
import "./link.scss";

const Link = (props: { linkProps: LinkType }) => {
  const { name, url, target, onClickFunction } = props.linkProps;

  return (
    <a
      href={url}
      className="customLink"
      onClick={onClickFunction}
      target={target}
    >
      {name}
    </a>
  );
};

export default Link;
