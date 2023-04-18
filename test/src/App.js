import React from "react";
import "./components/Body/Body.css";
import Header from "./components/Header/Header";
import Healthcare from "./components/Main/SectionHealthcare/Healthcare";

function App() {
  return (
    <div className="App">
      <Header />
      <Healthcare />
    </div>
  );
}

export default App;
