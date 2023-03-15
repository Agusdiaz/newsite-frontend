import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SettingAnimation } from "../../assets/iconAnimations";
import { navBarRoutes } from "../../assets/navBarRoutes";
import Tooltip from "../../components/tooltip/Tooltip";
import { ScreenContext } from "../../context/screenContext";
import "./navBar.scss";

const NavBar = ({ setIsAuthenticatedFromApp }) => {
  const { windowSize } = useContext(ScreenContext);
  const [iconSize, setIconSize] = useState("");

  useEffect(() => {
    if (windowSize[0] <= 400) setIconSize("1.2rem");
    if (windowSize[0] > 400 && windowSize[0] <= 768) setIconSize("1.6rem");
    if (windowSize[0] > 768) setIconSize("2rem");
  }, [windowSize]);

  return (
    <nav className="navbar-container">
      <ul>
        {navBarRoutes.map((el, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "navbar-container__link--active"
                  : "navbar-container__link"
              }
              to={el.path}
            >
              {el.name}
            </NavLink>
          </li>
        ))}
        <li key={3}>
          <Tooltip setIsAuthenticatedFromApp={setIsAuthenticatedFromApp}>
            <SettingAnimation width={iconSize} height={iconSize} />
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
