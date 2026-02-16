import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  multiplyByTwo,
  incrementByAmount,
} from "./redux/counter/counterSlice";

import Navbar from './components/Navbar'



function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar/>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiplyByTwo())}>*2</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>+Amount</button>
    </div>
  );
}

export default App;
