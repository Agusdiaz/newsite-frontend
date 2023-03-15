import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonEmpty from "../../components/common/button/ButtonEmpty";
import ButtonFilled from "../../components/common/button/ButtonFilled";
import Checkbox from "../../components/common/button/Checkbox";
import ToggleSwitchTheme from "../../components/toggleTheme/ToggleSwitchTheme";
import Input from "../../components/common/input/Input";
import Link from "../../components/common/link/link";
import { ScreenContext } from "../../context/screenContext";
import { UserContext } from "../../context/userContext";
import { getUserInfoLogin } from "../../services/auth/authService";
import {
  ModalError,
  ModalLoginFailed,
  ModalUnavailable,
} from "../../utils/interfaces/ModalTypes";
import "./login.scss";

const Login = ({ imagePath, imageAlt, setIsAuthenticatedFromApp }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPasword] = useState("");
  const [disableLogin, setDisableLogin] = useState(true);
  const [showEmailError, setshowEmailError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const { setTheme, setShowLoader, setShowModal, setModalProps } =
    useContext(ScreenContext);

  const { setIsAuthenticated, setUser } = useContext(UserContext);

  const validateEmail = (email) => {
    if (email.length === 0) return true;
    const expression: RegExp =
      /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    const result: boolean = expression.test(email);
    return result;
  };

  useEffect(() => {
    if (validateEmail(userEmail)) setshowEmailError(false);
    else setshowEmailError(true);
    if (userPassword.length === 0 || userPassword.length > 7)
      setshowPasswordError(false);
    else setshowPasswordError(true);
    if (
      showEmailError ||
      userEmail.length === 0 ||
      showPasswordError ||
      userPassword.length === 0
    )
      setDisableLogin(true);
    else setDisableLogin(false);
  }, [userEmail, userPassword, showEmailError, showPasswordError]);

  const handleLogin = async () => {
    if (!disableLogin) {
      setShowLoader(true);
      const response = await getUserInfoLogin(userEmail, userPassword);
      setShowLoader(false);
      if (response.isAuthenticated) {
        setTheme({ isTouched: true, theme: localStorage.getItem("theme") });
        setUser((prevState) => ({
          ...prevState,
          userId: localStorage.getItem("userId"),
          userEmail: localStorage.getItem("userEmail"),
          userName: localStorage.getItem("userName"),
          userAvatar: localStorage.getItem("userAvatar"),
        }));
        setIsAuthenticated(true);
        setIsAuthenticatedFromApp(true);
        navigate("/home");
      } else if (!response.isAuthenticated && response.status) {
        setModalProps(() => ({
          ...ModalLoginFailed,
          firstButtonObject: {
            ...ModalLoginFailed.firstButtonObject,
            onClickFunction: () => {
              setShowModal(false);
            },
          },
          closeModal: () => {
            setShowModal(false);
          },
        }));
        setShowModal(true);
      } else if (response.error) {
        setModalProps(() => ({
          ...ModalError,
          firstButtonObject: {
            ...ModalError.firstButtonObject,
            onClickFunction: () => {
              setShowModal(false);
            },
          },
          closeModal: () => {
            setShowModal(false);
          },
        }));
        setShowModal(true);
      }
    }
  };

  const handleUnavailableModal = () => {
    setModalProps(() => ({
      ...ModalUnavailable,
      firstButtonObject: {
        ...ModalUnavailable.firstButtonObject,
        onClickFunction: () => {
          setShowModal(false);
        },
      },
      closeModal: () => {
        setShowModal(false);
      },
    }));
    setShowModal(true);
  };

  return (
    <div className="login-container">
      <div className="login-info">
        <p className="login-info__title">Welcome back!</p>
        <div className="login-info__inputs">
          <Input
            inputProps={{
              name: "EMAIL",
              type: "email",
              isRequired: true,
              handleInput: setUserEmail,
              showError: showEmailError,
              errorMessage: "The email is incorrect. Please verify.",
              parentFunction: handleLogin,
            }}
          />
          <Input
            inputProps={{
              name: "PASSWORD",
              type: "password",
              isRequired: true,
              handleInput: setUserPasword,
              showError: showPasswordError,
              errorMessage: "The password is too short.",
              parentFunction: handleLogin,
            }}
          />
        </div>
        <div className="login-info__subtitles">
          <Checkbox
            checkboxProps={{
              name: "Remember me?",
              isChecked: isChecked,
              handleIsChecked: setIsChecked,
            }}
          />
          <Link
            linkProps={{
              name: "Forgot password?",
              url: "#",
              target: "_self",
              onClickFunction: handleUnavailableModal,
            }}
          />
        </div>
        <div className="login-info__buttons-container">
          <ButtonFilled
            buttonProps={{
              title: "LOGIN",
              onClickFunction: () => handleLogin(),
              isDisabled: disableLogin,
            }}
          />
          <ButtonEmpty
            buttonProps={{
              title: "CREATE ACCOUNT",
              onClickFunction: handleUnavailableModal,
              isDisabled: false,
            }}
          />
        </div>
        <div className="login-info__toggle">
          <ToggleSwitchTheme />
          <p className="login-info__toggle__title">switch between themes</p>
        </div>
      </div>
      <img
        className="login-pic"
        src={require(`../../assets/${imagePath}`)}
        alt={imageAlt}
      />
    </div>
  );
};

export default Login;
