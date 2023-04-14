import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
