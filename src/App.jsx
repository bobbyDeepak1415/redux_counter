import { useState } from "react";
import "./App.css";

function App() {

  const [count,setCount]=useState("")
  return (
    <div>
      <h2>Hello</h2>

      <p><span>The counter is at:</span>{count}</p>
      <button onClick={}>-</button>
      <button onClick={}>+</button>
    </div>
  );
}

export default App;
