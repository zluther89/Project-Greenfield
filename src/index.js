import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./Router.js";
import { Provider } from "react-redux";
import store from "./components/Redux/Store.js";
import withClickTracker from "./ClickDecorator";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
