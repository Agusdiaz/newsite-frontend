import React, { useContext, useState } from "react";
import { ScreenContext } from "../../context/screenContext";
import "./toggleSwitchTheme.scss";

const ToggleSwitchTheme = () => {
  const { setTheme, nextTheme, theme } = useContext(ScreenContext);
  const [isChecked, setIsChecked] = useState(
    theme.theme === "light" ? false : true
  );

  const handleTheme = () => {
    setTheme({ isTouched: true, theme: nextTheme });
    localStorage.setItem("theme", nextTheme);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsChecked(!isChecked);
      handleTheme();
    }
  };

  return (
    <div className="toggleTheme-container">
      <input
        type="checkbox"
        id={isChecked ? "hide-checkbox--clicked" : "hide-checkbox"}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        onClick={() => handleTheme()}
      />
      <label
        htmlFor={isChecked ? "hide-checkbox--clicked" : "hide-checkbox"}
        className="toggle"
      >
        <span className="toggle-button" tabIndex={0} onKeyDown={handleKeyDown}>
          <span className="crater crater-1"></span>
        </span>

        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
      </label>
    </div>
  );
};

export default ToggleSwitchTheme;
