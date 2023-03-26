import React, { createContext, useState } from "react";
import { UserType } from "../utils/interfaces/UserTypes";
export const UserContext = createContext(null);
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" ? true : false
  );
  const [user, setUser] = useState<UserType>({
    userId: localStorage.getItem("userId")
      ? parseInt(localStorage.getItem("userId"))
      : null,
    userEmail: localStorage.getItem("userEmail")
      ? localStorage.getItem("userEmail")
      : "",
    userName: localStorage.getItem("userName")
      ? localStorage.getItem("userName")
      : "",
    userAvatar: localStorage.getItem("userAvatar")
      ? localStorage.getItem("userAvatar")
      : "",
    userCountry: localStorage.getItem("userCountry")
      ? localStorage.getItem("userCountry")
      : "",
    userBirthdate: localStorage.getItem("userBirthdate")
      ? localStorage.getItem("userBirthdate")
      : "",
    userSkills: localStorage.getItem("userSkills")
      ? localStorage.getItem("userSkills")
      : "",
  });

  return (
    <Provider
      value={{
        setIsAuthenticated,
        isAuthenticated,
        setUser,
        user,
      }}
    >
      {children}
    </Provider>
  );
};

export default UserProvider;
