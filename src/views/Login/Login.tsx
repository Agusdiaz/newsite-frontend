import React, { useContext, useState } from "react";
import ButtonEmpty from "../../components/common/button/ButtonEmpty";
import ButtonFilled from "../../components/common/button/ButtonFilled";
import Checkbox from "../../components/common/button/Checkbox";
import Input from "../../components/common/input/Input";
import Link from "../../components/common/link/link";
import Loader from "../../components/loading/Loader";
import Modal from "../../components/modal/Modal";
import { ScreenContext } from "../../context/screenContext";
import "./login.scss";

const Login = ({ imagePath, imageAlt }) => {
  const [showUnavailableModal, setShowUnavailableModal] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPasword] = useState("");

  const { setTheme, nextTheme } = useContext(ScreenContext)

  const handleTheme = () => {
    setTheme({ isTouched: true, theme: nextTheme })
    localStorage.setItem("theme", nextTheme)
  }

  const loginContainerClass =
    isLoading || showUnavailableModal
      ? "layout-container--blurOn"
      : "layout-container";

  return (
    <>
      {isLoading && <Loader />}

      {showUnavailableModal && (
        <Modal
          modalProps={{
            title: "This feature is unavailable",
            subtitle: "Coming soon.",
            firstButtonObject: {
              type: "filled",
              title: "Close",
              onClickFunction: () => {
                setShowUnavailableModal(false);
              },
              isDisabled: false,
              color: "red",
            },
            closeModal: () => setShowUnavailableModal(false)
          }}
        />
      )}

      <div className={loginContainerClass}>
        <div className="login-container">
          <div className="login-info">
            <p className="login-info__title">Welcome back!</p>
            <div className="login-info__inputs">
              <Input inputProps={{ name: "EMAIL", type: "text", isRequired: true }} />
              <Input inputProps={{ name: "PASSWORD", type: "password", isRequired: true }} />
            </div>
            <div className="login-info__subtitles">
              <Checkbox checkboxProps={{ name: "Remember me?" }} />
              <Link linkProps={{ name: "Forgot password?", url: "#" }} />
            </div>
            <div className="login-info__buttons-container">
              <ButtonFilled
                buttonProps={{
                  title: "LOGIN",
                  onClickFunction: () => handleTheme(),
                  isDisabled: false
                }}
              />
              <ButtonEmpty
                buttonProps={{
                  title: "CREATE ACCOUNT",
                  onClickFunction: () => { setShowUnavailableModal(true) },
                  isDisabled: false
                }}
              />
            </div>
          </div>
          <img
            className="login-pic"
            src={require(`../../assets/${imagePath}`)}
            alt={imageAlt}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
