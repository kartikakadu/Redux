import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, multiply } from './Counter/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.value); //bring the redux from count// read counter
  const dispatch = useDispatch(); //hook
  return (
    <>
      <h1>Counter</h1>
      <div>currently counter value is {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
      {/* need to give arrow function not re-execute our dispatch */}
    </>
  );
}

export default App;
