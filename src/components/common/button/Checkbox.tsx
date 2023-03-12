import React from "react";
import { CheckboxType } from "../../../utils/interfaces/CheckboxTypes";
import "./checkbox.scss";

const Checkbox = (props: { checkboxProps: CheckboxType }) => {
  const { name, isChecked, handleIsChecked } = props.checkboxProps;

  return (
    <label className="checkboxLabel">
      <input
        type="checkbox"
        onChange={() => {
          handleIsChecked(!isChecked);
        }}
        className="checkboxLabel__box"
      />
      <span className={`checkboxLabel__title${isChecked ? "--active" : ""}`}>
        {name}
      </span>
    </label>
  );
};

export default Checkbox;
