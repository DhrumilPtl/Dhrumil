import React, { useState } from "react";

interface Istate {
  name: String;
  surname: String;
  age: number;
}

export default function Function() {
  const [state, setState] = useState<Istate>({
    name: "Dipesh",
    surname: "Patel",
    age: 39,
  });
  return (
    <div>
      <h1>name: {state.name}</h1>
      <h2>surname:{state.surname}</h2>
      <h3>age:{state.age}</h3>    
    </div>
  );
}
