import React from "react";
import { Link } from "react-router-dom";
import { navBarRoutes } from "../../assets/navBarRoutes";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        {navBarRoutes.map((el) => (
          <li>
            <Link className="navbar-container__link" to={el.path}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
