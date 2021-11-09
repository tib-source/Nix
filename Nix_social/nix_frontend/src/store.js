import { createStore, combineReducers, applyMiddleware } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed
  });

export const store = createStore(
  combineReducers({
    router: routerReducer,
    //... reducers //your reducers!
  }),
  applyMiddleware(routerMiddleware)
);

export const history = createReduxHistory(store);
