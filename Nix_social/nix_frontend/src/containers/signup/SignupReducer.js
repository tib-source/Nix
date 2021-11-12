import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernameError: "",
  passwordError: "",
  isSubmitted: false,
};

const signUpSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {
    CREATE_USER_SUBMITTED: (state) => {
      state.isSubmitted = true;
    },
    CREATE_USER_SUCCESS: (state) => {
      state.isSubmitted = false;
    },
    CREATE_USER_ERROR: (state, action) => {
      if (action.payload.errorData.hasOwnProperty("password")) {
        state.passwordError = action.payload.errorData["password"];
      }
      if (action.payload.errorData.hasOwnProperty("username")) {
        state.usernameError = action.payload.errorData["username"];
      }
    },
  },
});

export default signUpSlice;
