import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signUpSlice from "./container/signup/SignupReducer";
import loginSlice from "./container/Login/LoginReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    createUser: signUpSlice.reducer,
    auth: loginSlice.reducer,
  });

export default createRootReducer;
