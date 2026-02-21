import "./App.css";
import Navbar from "./Navbar";

import {
  increment,
  decrement,
  increaseByAmount,
  multiplyBy3,
} from "./redux/MoviesSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Hello</h2>
      <Navbar count={count} />

      <p>
        <span>The counter is at:</span>
        {count}
      </p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiplyBy3())}>*3</button>
      <button onClick={() => dispatch(increaseByAmount(3))}>byAmount</button>
    </div>
  );
}

export default App;
