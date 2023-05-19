import React from "react";
import "./components/Body/Body.css";
import Header from "./components/Header/Header";
import Healthcare from "./components/Main/SectionHealthcare/Healthcare";
import OurServices from "./components/OurServices/Our-services";

function App() {
  return (
    <div className="App">
      <Header />
      <Healthcare />
      <OurServices />
    </div>
  );
}

export default App;
