import signUpSlice from "./SignupReducer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOnError } from "../Utils/Utils";

// CREATE_USER_SUBMITTED;
// CREATE_USER_SUCCESS;
// CREATE_USER_ERROR;

export const signupNewUser = (userdata) => (dispatch) => {
  dispatch(signUpSlice.actions.CREATE_USER_SUBMITTED());
  axios
    .post("/auth/users/", userdata)
    .then((response) => {
      toast.success(
        `Account for ${userdata.username} created successfully. Please Login`
      );
      dispatch(signUpSlice.actions.CREATE_USER_SUCCESS());
    })
    .catch((error) => {
      toastOnError(error);
    });
};
