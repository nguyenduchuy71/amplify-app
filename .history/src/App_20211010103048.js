import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Predictions } from "aws-amplify";

function App() {
  const [reponse, setReponse] = useState("Ready to translate...");
  const [text, setText] = useState("Write to translate...");
  const translateCall = async () => {
    const data = await Predictions.convert({
      translateText: { source: { text } },
    });
    setReponse(data.text);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
