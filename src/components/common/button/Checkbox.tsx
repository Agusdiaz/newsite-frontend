import React from "react";
import { useState } from "react";
import { CheckboxType } from "../../../utils/interfaces/CheckboxTypes";
import "./checkbox.scss";

const Checkbox = (props: { checkboxProps: CheckboxType }) => {
  const { name } = props.checkboxProps;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="checkboxLabel">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
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
