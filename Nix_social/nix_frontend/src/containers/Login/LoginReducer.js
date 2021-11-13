import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
  token: "",
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    set_token: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    set_current_user: (state, action) => {
      state.user = action.payload;
    },
    unset_current_user: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.token = "";
    },
  },
});

export default loginSlice;
