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
        <input />
      </header>
    </div>
  );
}

export default App;
