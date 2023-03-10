import React from "react";
import { ButtonType } from "../../../utils/interfaces/ButtonTypes";
import "./buttonEmpty.scss";

const ButtonEmpty = (props: { buttonProps: ButtonType; }) => {
  const { title, onClickFunction, isDisabled, color } = props.buttonProps;
  const chosenColor = color !== undefined ? color : "default";

  return (
    <button
      className={`emptyButton ${chosenColor}`}
      onClick={onClickFunction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default ButtonEmpty;
