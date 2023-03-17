import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SettingAnimation } from "../../assets/iconAnimations";
import { navBarRoutes } from "../../assets/navBarRoutes";
import Tooltip from "../../components/tooltip/Tooltip";
import { ScreenContext } from "../../context/screenContext";
import "./navBarMobile.scss";

const NavBarMobile = () => {
  const { windowSize } = useContext(ScreenContext);
  const [iconSize, setIconSize] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (windowSize[0] <= 400) setIconSize("1.7rem");
    if (windowSize[0] > 400 && windowSize[0] <= 768) setIconSize("2.1rem");
    if (windowSize[0] > 768) setIconSize("2.4rem");
  }, [windowSize]);

  return (
    <nav className="navbarmobile-container">
      <ul>
        {navBarRoutes(iconSize).map((el, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive || (location.pathname === "/" && el.name === "Home")
                  ? "navbarmobile-container__link--active"
                  : "navbarmobile-container__link"
              }
              to={el.path}
            >
              {el.icon}
            </NavLink>
          </li>
        ))}
        <li key={3}>
          <Tooltip>
            <SettingAnimation width={iconSize} height={iconSize} />
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMobile;
