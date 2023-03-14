import { createContext, useEffect, useState } from "react";
import { ModalType } from "../utils/interfaces/ModalTypes";
export const ScreenContext = createContext(null);
const { Provider } = ScreenContext;

const ScreenProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    theme: localStorage.getItem("theme") || "light",
    isTouched: false,
  });
  const nextTheme = theme.theme === "light" ? "dark" : "light";

  const [activeOnBlur, setActiveOnBlur] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState<ModalType>({
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

  useEffect(() => {
    document.body.dataset.theme = theme.theme;
  }, [theme]);

  return (
    <Provider
      value={{
        setTheme,
        theme,
        nextTheme,
        setActiveOnBlur,
        activeOnBlur,
        setShowLoader,
        showLoader,
        setShowModal,
        showModal,
        setModalProps,
        modalProps,
      }}
    >
      {children}
    </Provider>
  );
};

export default ScreenProvider;
