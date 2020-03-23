import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer.js";
//import loggingMiddleware from "redux-logger";

export default createStore(
  reducer
  //   applyMiddleware(loggingMiddleware)
);
