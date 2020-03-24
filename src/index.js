import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./components/Redux/Store.js";
import 'bulma/css/bulma.css'
import "bootstrap/dist/css/bootstrap.css";
import { Plus } from 'react-feather';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
