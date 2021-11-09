import signUpSlice from "./SignupReducer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      console.log(error.response);
      if (error.response) {
        toast.error(JSON.stringify(error.response.data));
        dispatch(
          signUpSlice.actions.CREATE_USER_ERROR({
            errorData: error.response.data,
          })
        );
      } else if (error.message) {
        toast.error(JSON.stringify(error.message));
      } else {
        toast.error(JSON.stringify(error));
      }
    });
};
