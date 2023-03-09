import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import ButtonEmpty from "../common/button/ButtonEmpty";
import ButtonFilled from "../common/button/ButtonFilled";
import "./modal.scss";

const Modal = ({
  title,
  subtitle,
  firstButtonObject,
  secondButtonObject,
  closeModal,
}) => {
  const ref = useRef();
  useOnClickOutside(ref, closeModal);
  return (
    <div className="modal-container" ref={ref}>
      <p className="modal-container__title">{title}</p>
      <p className="modal-container__subtitle">{subtitle}</p>
      <div className="modal-container__buttons-container">
        {firstButtonObject !== undefined &&
        firstButtonObject.type === "filled" ? (
          <ButtonFilled
            title={firstButtonObject.title}
            onClickFunction={firstButtonObject.onClick}
            isDisabled={firstButtonObject.isDisabled}
          />
        ) : (
          firstButtonObject !== undefined &&
          firstButtonObject.type === "empty" && (
            <ButtonEmpty
              title={firstButtonObject.title}
              onClickFunction={firstButtonObject.onClick}
              isDisabled={firstButtonObject.isDisabled}
            />
          )
        )}
        <br />
        {secondButtonObject !== undefined &&
        secondButtonObject.type === "filled" ? (
          <ButtonFilled
            title={secondButtonObject.title}
            onClickFunction={secondButtonObject.onClick}
            isDisabled={secondButtonObject.isDisabled}
          />
        ) : (
          secondButtonObject !== undefined &&
          secondButtonObject.type === "empty" && (
            <ButtonEmpty
              title={secondButtonObject.title}
              onClickFunction={secondButtonObject.onClick}
              isDisabled={secondButtonObject.isDisabled}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
