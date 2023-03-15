import { createContext, useEffect, useState } from "react";
import { ModalType } from "../utils/interfaces/ModalTypes";
import isMobileDevice from "../utils/isMobileDevice";
export const ScreenContext = createContext(null);
const { Provider } = ScreenContext;

const ScreenProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    theme: localStorage.getItem("theme") || "light",
    isTouched: false,
  });
  const nextTheme = theme.theme === "light" ? "dark" : "light";

  const [activeOnBlur, setActiveOnBlur] = useState(false);
  const [isMobile] = useState(isMobileDevice());
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

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
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
        isMobile,
        windowSize,
      }}
    >
      {children}
    </Provider>
  );
};

export default ScreenProvider;
