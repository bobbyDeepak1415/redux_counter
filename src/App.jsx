import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiplyBy2,
  increaseByAmount,
} from "./redux/counter/counterSlice";

import Navbar from "./components/Navbar";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button disabled={count.value===0} onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiplyBy2())}>*2</button>
      <button onClick={() => dispatch(increaseByAmount(4))}>+Amount</button>
    </div>
  );
}

export default App;
