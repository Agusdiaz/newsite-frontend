import { apiBackend } from "../constants";
import axios from "axios";

export const getNews = async (refresh?: boolean) => {
  if (localStorage.getItem("news") && !refresh) {
    return {
      status: 200,
      data: JSON.parse(localStorage.getItem("news")),
      error: null,
    };
  } else {
    try {
      let response = await axios({
        method: "GET",
        url: `${apiBackend}/news`,
      });
      if (response.status === 200 && response.data[0]) {
        localStorage.setItem("news", JSON.stringify(response.data));
        return {
          status: response.status,
          data: response.data,
          error: null,
        };
      }
      return { status: response.status, data: null, error: null };
    } catch (error) {
      console.log(error);
      return { status: null, data: null, error };
    }
  }
};
