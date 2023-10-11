import React, { useReducer } from "react";

const counteReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Usereduce() {
  const [state, dispatch] = useReducer(counteReducer, { count: 0 });

  return (
    <div>
      <h2>It's a use reduse component </h2>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
}
