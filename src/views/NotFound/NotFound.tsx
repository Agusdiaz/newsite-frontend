import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ButtonFilled from "../../components/common/button/ButtonFilled";
import { UserContext } from "../../context/userContext";
import "./notFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);

  function NotFoundContent() {
    return (
      <div className="notfound-container">
        <div className="notfound-container__title">Oops!</div>
        <h2 className="notfound-container__subtitle">404 - Page not found</h2>
        <img
          className="notfound-container__pic"
          src={require(`../../assets/notfound.png`)}
          alt={"Not found"}
        />
        <h3 className="notfound-container__explanation">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </h3>
        <ButtonFilled
          buttonProps={{
            title: "GO BACK",
            onClickFunction: () => {
              isAuthenticated ? navigate("/home") : navigate("/login");
            },
          }}
        />
      </div>
    );
  }

  return isAuthenticated ? (
    <>{NotFoundContent()}</>
  ) : (
    <div className="upper-container">{NotFoundContent()}</div>
  );
};

export default NotFound;
