import React, { useContext } from "react";
import { DarkTheme, LightTheme, LogOut } from "../../assets/iconsSVG";
import { ScreenContext } from "../../context/screenContext";
import { useNavigate } from "react-router-dom";
import "./tooltip.scss";
import { UserContext } from "../../context/userContext";

const Tooltip = ({ children, setIsAuthenticatedFromApp }) => {
  const { theme, setTheme, nextTheme } = useContext(ScreenContext);
  const { setIsAuthenticated, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleTheme = () => {
    setTheme({ isTouched: true, theme: nextTheme });
    localStorage.setItem("theme", nextTheme);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser((prevState) => ({
      ...prevState,
      userId: null,
      userEmail: "",
      userName: "",
      userAvatar: "",
      theme: null,
    }));
    setIsAuthenticated(false);
    setIsAuthenticatedFromApp(false);
    navigate("/login");
  };

  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-container__inside">
        <div className="tooltip-container__inside__block">
          {theme.theme === "light" ? (
            <>
              <div className="tooltip-container__inside__block__icon">
                <DarkTheme
                  width={"1.7rem"}
                  height={"1.7rem"}
                  onClickFunction={() => handleTheme()}
                />
              </div>
              <p
                className="tooltip-container__inside__block__title"
                onClick={() => handleTheme()}
              >
                Dark Theme
              </p>
            </>
          ) : (
            <>
              <div className="tooltip-container__inside__block__icon">
                <LightTheme
                  width={"1.7rem"}
                  height={"1.7rem"}
                  onClickFunction={() => handleTheme()}
                />
              </div>
              <p
                className="tooltip-container__inside__block__title"
                onClick={() => handleTheme()}
              >
                Light Theme
              </p>
            </>
          )}
        </div>
        <div className="tooltip-container__inside__block">
          <div className="tooltip-container__inside__block__icon">
            <LogOut
              width={"1.7rem"}
              height={"1.7rem"}
              onClickFunction={() => handleLogout()}
            />
          </div>
          <p
            className="tooltip-container__inside__block__title"
            onClick={() => handleLogout()}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
