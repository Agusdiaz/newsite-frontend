import { apiBackend } from "../constants";
import axios from "axios";

export const getUserInfoLogin = async (
  userEmail: string,
  userPassword: string
) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${apiBackend}/users?email=${userEmail}`,
      /* headers: {
        Authorization: `Bearer ${token}`,
      }, */
    });
    if (response.status === 200 && response.data[0]) {
      if (
        userEmail === response?.data[0].email &&
        userPassword === response?.data[0].password
      ) {
        localStorage.setItem("userId", response.data[0].id);
        localStorage.setItem("userEmail", response.data[0].email);
        localStorage.setItem("userName", response.data[0].name);
        localStorage.setItem("userAvatar", response.data[0].avatar);
        localStorage.setItem("theme", response.data[0].theme);
        return { isAuthenticated: true, status: response.status, error: null };
      }
      return { isAuthenticated: false, status: response.status, error: null };
    }
    return { isAuthenticated: false, status: response.status, error: null };
  } catch (error) {
    console.log(error);
    return { isAuthenticated: false, status: null, error };
  }
};
