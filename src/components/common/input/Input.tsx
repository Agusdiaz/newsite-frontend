import React from "react";
import { InputType } from "../../../utils/interfaces/InputTypes";
import "./input.scss";

const Input = (props: { inputProps: InputType }) => {
  const { name, isRequired, type, handleInput, showError, errorMessage } =
    props.inputProps;

  const inputBoxContainerClass = showError
    ? "inputContainer__box--error"
    : "inputContainer__box";

  return (
    <div className="inputContainer">
      <label className="inputContainer__label">
        <b>{name}</b>
      </label>
      <input
        className={inputBoxContainerClass}
        name={name}
        type={type}
        required={isRequired}
        onChange={(e) => handleInput(e.target.value)}
      />
      <p className="inputContainer__errorMessage">
        {showError && errorMessage ? errorMessage : ""}
      </p>
    </div>
  );
};

export default Input;
