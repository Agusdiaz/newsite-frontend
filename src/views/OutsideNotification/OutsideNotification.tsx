import React, { useContext } from "react";
import Loader from "../../components/loading/Loader";
import Modal from "../../components/modal/Modal";
import { ScreenContext } from "../../context/screenContext";

const OutsideNotifications = () => {
  const { showLoader, showModal, modalProps } = useContext(ScreenContext);

  return (
    <>
      {showLoader && <Loader />}
      {showModal && <Modal modalProps={modalProps} />}
    </>
  );
};

export default OutsideNotifications;
