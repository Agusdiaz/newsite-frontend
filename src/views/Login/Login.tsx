import React, { useContext, useEffect, useState } from "react";
import ButtonEmpty from "../../components/common/button/ButtonEmpty";
import ButtonFilled from "../../components/common/button/ButtonFilled";
import Checkbox from "../../components/common/button/Checkbox";
import Input from "../../components/common/input/Input";
import Link from "../../components/common/link/link";
import Loader from "../../components/loading/Loader";
import Modal from "../../components/modal/Modal";
import { ScreenContext } from "../../context/screenContext";
import { getUserInfoLogin } from "../../services/auth/authService";
import {
  ModalType,
  ModalError,
  ModalLoginFailed,
  ModalUnavailable,
} from "../../utils/interfaces/ModalTypes";
import "./login.scss";

const Login = ({ imagePath, imageAlt, setAuthenticated }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalValues, setModalValues] = useState<ModalType>({
    title: "",
    subtitle: "",
    firstButtonObject: {
      type: null,
      title: null,
      onClickFunction: () => {},
      isDisabled: null,
      color: null,
    },
    secondButtonObject: {
      type: null,
      title: null,
      onClickFunction: () => {},
      isDisabled: null,
      color: null,
    },
    closeModal: () => {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPasword] = useState("");
  const [disableLogin, setDisableLogin] = useState(true);
  const [showEmailError, setshowEmailError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { setTheme, nextTheme } = useContext(ScreenContext);

  const loginContainerClass =
    isLoading || showModal ? "layout-container--blurOn" : "layout-container";

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

  const handleTheme = () => {
    setTheme({ isTouched: true, theme: nextTheme });
    localStorage.setItem("theme", nextTheme);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await getUserInfoLogin(userEmail, userPassword);
    setIsLoading(false);
    if (response.isAuthenticated) {
      console.log("aca");
      setTheme({ isTouched: true, theme: localStorage.getItem("theme") });
      setAuthenticated(true);
    } else if (!response.isAuthenticated && response.status) {
      setModalValues((prevState) => ({
        ...ModalLoginFailed,
        firstButtonObject: {
          ...ModalLoginFailed.firstButtonObject,
          onClickFunction: () => {
            setShowModal(false);
          },
        },
        closeModal: () => setShowModal(false),
      }));
      setShowModal(true);
    } else if (response.error) {
      setModalValues((prevState) => ({
        ...ModalError,
        firstButtonObject: {
          ...ModalError.firstButtonObject,
          onClickFunction: () => {
            setShowModal(false);
          },
        },
        closeModal: () => setShowModal(false),
      }));
      setShowModal(true);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      {showModal && <Modal modalProps={modalValues} />}

      <div className={loginContainerClass}>
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
                  onClickFunction: () => {
                    setModalValues((prevState) => ({
                      ...ModalUnavailable,
                      firstButtonObject: {
                        ...ModalUnavailable.firstButtonObject,
                        onClickFunction: () => {
                          setShowModal(false);
                        },
                      },
                      closeModal: () => setShowModal(false),
                    }));
                    setShowModal(true);
                  },
                }}
              />
            </div>
            <div className="login-info__buttons-container">
              <ButtonFilled
                buttonProps={{
                  title: "LOGIN",
                  // onClickFunction: () => handleTheme(),
                  onClickFunction: () => handleLogin(),
                  isDisabled: disableLogin,
                }}
              />
              <ButtonEmpty
                buttonProps={{
                  title: "CREATE ACCOUNT",
                  onClickFunction: () => {
                    setModalValues((prevState) => ({
                      ...ModalUnavailable,
                      firstButtonObject: {
                        ...ModalUnavailable.firstButtonObject,
                        onClickFunction: () => {
                          setShowModal(false);
                        },
                      },
                      closeModal: () => setShowModal(false),
                    }));
                    setShowModal(true);
                  },
                  isDisabled: false,
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
