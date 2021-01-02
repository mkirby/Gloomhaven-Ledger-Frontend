import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_helpers/store";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
