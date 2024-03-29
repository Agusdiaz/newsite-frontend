import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SettingAnimation } from "../../assets/iconAnimations";
import { navBarRoutes } from "../../assets/navBarRoutes";
import Tooltip from "../../components/tooltip/Tooltip";
import { ScreenContext } from "../../context/screenContext";
import "./navBarWeb.scss";

const NavBarWeb = () => {
  const { windowSize } = useContext(ScreenContext);
  const [iconSize, setIconSize] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (windowSize[0] <= 400) setIconSize("1.2rem");
    if (windowSize[0] > 400 && windowSize[0] <= 768) setIconSize("1.6rem");
    if (windowSize[0] > 768) setIconSize("2rem");
  }, [windowSize]);

  return (
    <nav className="navbarweb-container">
      <ul>
        {navBarRoutes().map((el, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive || (location.pathname === "/" && el.name === "Home")
                  ? "navbarweb-container__link--active"
                  : "navbarweb-container__link"
              }
              to={el.path}
            >
              {el.name}
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

export default NavBarWeb;
