import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import signUpSlice from "./components/signup/SignupReducer";
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    createUser: signUpSlice.reducer,
  });

export default createRootReducer;
