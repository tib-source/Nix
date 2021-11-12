import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signUpSlice from "./containers/signup/SignupReducer";
import loginSlice from "./containers/Login/LoginReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    createUser: signUpSlice.reducer,
    auth: loginSlice.reducer,
  });

export default createRootReducer;
