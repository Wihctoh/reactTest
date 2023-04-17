import React, { useState } from "react";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>Cars catalog</h1>
          <div>
            <div className={styles.item}>
              <div className={styles.img}></div>
              <h2>Car 2</h2>
              <p>Read more</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
