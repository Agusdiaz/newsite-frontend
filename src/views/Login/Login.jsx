import { useState } from "react";
import ButtonEmpty from "../../components/common/button/ButtonEmpty";
import ButtonFilled from "../../components/common/button/ButtonFilled";
import Checkbox from "../../components/common/button/Checkbox";
import Input from "../../components/common/input/Input";
import Link from "../../components/common/link/link";
import Loader from "../../components/common/loading/Loader";
import Modal from "../../components/modal/Modal";
import "./login.scss";

const Login = ({ imagePath, imageAlt }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginContainerClass =
    isLoading || showModal ? "layout-container--blurOn" : "layout-container";

  return (
    <>
      {isLoading && <Loader />}

      {showModal && (
        <Modal
          title="This is a modal"
          subtitle="This is a subtitle."
          firstButtonObject={{
            type: "filled",
            title: "Primero",
            onClick: () => {
              setShowModal(false);
            },
            isDisabled: false,
          }}
          secondButtonObject={{
            type: "empty",
            title: "Segundo",
            onClick: () => {
              setShowModal(false);
            },
            isDisabled: false,
          }}
          closeModal={() => setShowModal(false)}
        />
      )}

      <div className={loginContainerClass}>
        <div className="login-container">
          <div className="login-info">
            <p className="login-info__title">Welcome back!</p>
            <div className="login-info__inputs">
              <Input name={"EMAIL"} type="text" isRequired={true} />
              <Input name={"PASSWORD"} type="password" isRequired={true} />
            </div>
            <div className="login-info__subtitles">
              <Checkbox name={"Remember me?"} />
              <Link name="Forgot password?" url="#" />
            </div>
            <div className="login-info__buttons-container">
              <ButtonFilled
                title={"LOGIN"}
                onClickFunction={() => {
                  setShowModal(true);
                }}
                isDisabled={false}
              />
              <ButtonEmpty
                title={"CREATE ACCOUNT"}
                onClickFunction={() => {}}
                isDisabled={false}
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
