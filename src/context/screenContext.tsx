import { createContext, useEffect, useState } from "react";
export const ScreenContext = createContext(null);
const { Provider } = ScreenContext;

const ScreenProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    theme: localStorage.getItem("theme") || "light",
    isTouched: false,
  });
  const nextTheme = theme.theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme.theme;
  }, [theme]);

  return <Provider value={{ setTheme, theme, nextTheme }}>{children}</Provider>;
};

export default ScreenProvider;
