import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));