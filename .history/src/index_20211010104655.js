import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";

Amplify.configure(config);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
