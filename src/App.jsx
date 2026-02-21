import "./App.css";

import { increment, decrement } from "./redux/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Hello</h2>

      <p>
        <span>The counter is at:</span>
        {count}
      </p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
