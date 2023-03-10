import React, { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ModalType } from "../../utils/interfaces/ModalTypes";
import ButtonEmpty from "../common/button/ButtonEmpty";
import ButtonFilled from "../common/button/ButtonFilled";
import "./modal.scss";

const Modal = (props: {
  modalProps: ModalType
}) => {
  const { title,
    subtitle,
    firstButtonObject,
    secondButtonObject,
    closeModal } = props.modalProps;
  const ref: any = useRef();
  useOnClickOutside(ref, closeModal);

  return (
    <div className="modal-container" ref={ref}>
      <p className="modal-container__title">{title}</p>
      <p className="modal-container__subtitle">{subtitle}</p>
      <div className="modal-container__buttons-container">
        {firstButtonObject !== undefined &&
          firstButtonObject.type === "filled" ? (
          <ButtonFilled
            buttonProps={{
              title: firstButtonObject.title,
              onClickFunction: firstButtonObject.onClickFunction,
              isDisabled: firstButtonObject.isDisabled,
              color: firstButtonObject.color
            }}

          />
        ) : (
          firstButtonObject !== undefined &&
          firstButtonObject.type === "empty" && (
            <ButtonEmpty
              buttonProps={{
                title: firstButtonObject.title,
                onClickFunction: firstButtonObject.onClickFunction,
                isDisabled: firstButtonObject.isDisabled,
                color: firstButtonObject.color
              }}
            />
          )
        )}
        {secondButtonObject !== undefined && <br />}
        {secondButtonObject !== undefined &&
          secondButtonObject.type === "filled" ? (
          <ButtonFilled
            buttonProps={{
              title: secondButtonObject.title,
              onClickFunction: secondButtonObject.onClickFunction,
              isDisabled: secondButtonObject.isDisabled,
              color: secondButtonObject.color
            }}
          />
        ) : (
          secondButtonObject !== undefined &&
          secondButtonObject.type === "empty" && (
            <ButtonEmpty
              buttonProps={{
                title: secondButtonObject.title,
                onClickFunction: secondButtonObject.onClickFunction,
                isDisabled: secondButtonObject.isDisabled,
                color: secondButtonObject.color
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
