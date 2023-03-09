import { apiBackend } from "../constants";
import axios from "axios";

export const getUserInfo = async (token, fn) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${apiBackend}/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const userInfo = response.data;
      fn(userInfo);
    }
  } catch (error) {
    console.log(error);
  }
};
