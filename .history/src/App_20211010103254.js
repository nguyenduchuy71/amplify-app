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
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={translate}>Translate</button>
    </div>
  );
}

export default App;
