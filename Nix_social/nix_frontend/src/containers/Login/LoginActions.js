import axios from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { setAxiosAuthToken, toastOnError } from "../Utils/Utils";
import loginSlice from "./LoginReducer";

export const login = (userdata, redirectTo) => (dispatch) => {
  axios
    .post("/api/auth/token/login/", userdata)
    .then((response) => {
      const { auth_token } = response.data;
      setAxiosAuthToken(auth_token);
      dispatch(setToken(auth_token));
      dispatch(getCurrentUser(redirectTo));
    })
    .catch((error) => {
      dispatch(unsetCurrentUser);
      toastOnError(error);
    });
};

export const getCurrentUser = (redirectTo) => (dispatch) => {
  axios
    .get("/api/auth/users/me/")
    .then((response) => {
      const user = {
        username: response.data.username,
        password: response.data.password,
      };
      dispatch(setCurrentUser(user, redirectTo));
    })
    .catch((error) => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};

export const setCurrentUser = (user, redirectTo) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch(loginSlice.actions.set_current_user(user));
  if (redirectTo !== "") {
    dispatch(push(redirectTo));
  }
};

export const setToken = (token) => (dispatch) => {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  dispatch(loginSlice.actions.set_token(token));
};

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch(loginSlice.actions.unset_current_user());
};

export const logout = () => (dispatch) => {
  axios
    .post("/api/auth/token/logout/")
    .then((response) => {
      dispatch(unsetCurrentUser());
      dispatch(push("/"));
      toast.success("Logout Successfull");
    })
    .catch((error) => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};
