import React, { useState } from "react";
import {
  Email,
  PasswordCloseEye,
  PasswordOpenEye,
} from "../../../assets/iconsSVG";
import { InputType } from "../../../utils/interfaces/InputTypes";
import "./input.scss";

const Input = (props: { inputProps: InputType }) => {
  const {
    name,
    isRequired,
    type,
    handleInput,
    showError,
    errorMessage,
    parentFunction,
  } = props.inputProps;

  const [inputType, setInputType] = useState(type);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (parentFunction) parentFunction();
    }
  };

  const inputBoxContainerClass = showError
    ? "inputContainer__boxContainer__box--error"
    : "inputContainer__boxContainer__box";

  const setIcon = () => {
    switch (inputType) {
      case "email":
        return <Email />;
      case "text":
        if (type === "password")
          return (
            <PasswordCloseEye
              onClickFunction={() => {
                setInputType("password");
              }}
            />
          );
        return null;
      case "password":
        return (
          <PasswordOpenEye
            onClickFunction={() => {
              setInputType("text");
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="inputContainer">
      <label className="inputContainer__label">
        <b>{name}</b>
      </label>
      <div className="inputContainer__boxContainer">
        <input
          className={inputBoxContainerClass}
          name={name}
          type={inputType}
          required={isRequired}
          onChange={(e) => handleInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {setIcon()}
      </div>
      <p className="inputContainer__errorMessage">
        {showError && errorMessage ? errorMessage : ""}
      </p>
    </div>
  );
};

export default Input;
