import { useState } from "react";
import "./checkbox.scss";

const Checkbox = ({ name }) => {
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
