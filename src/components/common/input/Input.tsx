import React from "react";
import { InputType } from "../../../utils/interfaces/InputTypes";
import "./input.scss";

const Input = (props: { inputProps: InputType }) => {
  const { name, isRequired, type } = props.inputProps;

  return (
    <p className="inputContainer">
      <label className="inputContainer__label">
        <b>{name}</b>
      </label>
      <input
        className="inputContainer__box"
        name={name}
        type={type}
        required={isRequired}
      />
    </p>
  );
};

export default Input;
