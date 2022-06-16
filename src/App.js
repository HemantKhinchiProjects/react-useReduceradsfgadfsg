import React, { useReducer } from 'react';
import './style.css';
const intialState = 0;
const reducer = (state, action) => {
  if (action.type === 'increment') {
    console.log('increment');
    return state + 1;
  }
  if (action.type === 'Dincrement') {
    console.log(action);
    return state - 1;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <h1>Use Reducer</h1>
      <h2>{count}</h2>
      <div className="">
        <button onClick={() => dispatch({ type: 'increment' })}>Inc</button>
        <button onClick={() => dispatch({ type: 'Dincrement' })}>Dec</button>
      </div>
    </div>
  );
}
