import React from "react";
import { CheckboxType } from "../../../utils/interfaces/CheckboxTypes";
import "./checkbox.scss";

const Checkbox = (props: { checkboxProps: CheckboxType }) => {
  const { name, isChecked, handleIsChecked } = props.checkboxProps;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleIsChecked(!isChecked);
    }
  };

  return (
    <label className="checkboxLabel">
      <input
        type="checkbox"
        onChange={() => {
          handleIsChecked(!isChecked);
        }}
        className="checkboxLabel__box"
        onKeyDown={handleKeyDown}
        checked={isChecked}
      />
      <span className="checkboxLabel__title">{name}</span>
    </label>
  );
};

export default Checkbox;
