import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signUpSlice from "./components/signup/SignupReducer";
import loginSlice from "./components/Login/LoginReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    createUser: signUpSlice.reducer,
    auth: loginSlice.reducer,
  });

export default createRootReducer;
