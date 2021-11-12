import axios from "axios";
import { toast } from "react-toastify";

export const setAxiosAuthToken = (token) => {
  if (typeof token !== "undefined" && token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const toastOnError = (error) => {
  console.log(error.response);
  console.log(error.message);
  if (error.response) {
    // known error
    toast.error(JSON.stringify(error.response.data));
  } else if (error.message) {
    toast.error(JSON.stringify(error.message));
  } else {
    toast.error(JSON.stringify(error));
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    setAxiosAuthToken(token);
    return token;
  } catch (e) {
    return false;
  }
};
