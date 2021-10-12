import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

Amplify.configure(config);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
