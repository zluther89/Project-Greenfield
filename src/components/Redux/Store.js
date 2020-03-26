import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer.js";
import { getQuestionsThunk } from "./ThunkMiddleware.js";
import thunkMiddleware from "redux-thunk";
//import loggingMiddleware from "redux-logger";

export default createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
  // , loggingMiddleware
);
