import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createWouterHook } from "redux-first-history/wouter";
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
  composeWithDevTools(applyMiddleware(routerMiddleware))
);

export const history = createReduxHistory(store);
//if you use @reach/router
export const reachHistory = reachify(history);
//if you use wouter
export const wouterUseLocation = createWouterHook(history);
