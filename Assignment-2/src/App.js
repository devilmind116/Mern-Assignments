import React, { useState } from "react";
import "./App.css";

function App() {
  //initial states
  const [count, setCount] = useState(0);  
  const [ran, setRan] = useState(["white"]);

  const [background] = useState(["lightblue","lightpink","lightgoldenrodyellow","lightsalmon","lightcoral", "lightcyan", "lightseagreen", "lightgrey", "lightsteelblue"]);

  const increment = () => {
    setCount(count + 1);
    const ran = background[Math.floor(Math.random() * background.length)];
    setRan(ran);
  };

  const decrement = () => {
    setCount(count - 1);
    const ran = background[Math.floor(Math.random() * background.length)];
    setRan(ran);
  };

  const reset = () => {
    setCount(0);
    setRan("white");
  };

  return (
    <div className="app">
      <div style={{ backgroundColor: ran }} className="card">
        <h1>{count}</h1>
        <div className="btn_container">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
