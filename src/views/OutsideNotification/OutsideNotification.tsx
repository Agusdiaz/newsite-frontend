import React, { useContext } from "react";
import Loader from "../../components/loading/Loader";
import Modal from "../../components/modal/Modal";
import { ScreenContext } from "../../context/screenContext";
import ModalNew from "../../components/modal/ModalNew";
import Toast from "../../components/toast/Toast";

const OutsideNotifications = () => {
  const {
    showLoader,
    showModal,
    modalProps,
    showModalNew,
    selectedNewProps,
    showToast,
    toastProps,
  } = useContext(ScreenContext);

  return (
    <>
      {showLoader && <Loader />}
      {showModal && <Modal modalProps={modalProps} />}
      {showModalNew && <ModalNew selectedNewProps={selectedNewProps} />}
      {showToast && <Toast toastProps={toastProps} />}
    </>
  );
};

export default OutsideNotifications;
