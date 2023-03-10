import React from "react";
import { ButtonType } from "../../../utils/interfaces/ButtonTypes";
import "./buttonFilled.scss";

const ButtonFilled = (props: { buttonProps: ButtonType; }) => {
  const { title, onClickFunction, isDisabled, color } = props.buttonProps;
  const chosenColor = color !== undefined ? color : "default";

  return (
    <button
      className={`filledButton ${chosenColor}`}
      onClick={onClickFunction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default ButtonFilled;
