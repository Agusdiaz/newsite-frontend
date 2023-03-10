import React from "react";
import { LinkType } from "../../../utils/interfaces/LinkTypes";
import "./link.scss";

const Link = (props: { linkProps: LinkType }) => {
  const { name, url } = props.linkProps;
  
  return (
    <a href={url} className="customLink">
      {name}
    </a>
  );
};

export default Link;
