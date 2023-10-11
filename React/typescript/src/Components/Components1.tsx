import { useState } from "react";
import React from "react";

interface IProps {
  name: string;
  surname: string;
}

interface Istate {
  name: String;
  age: number;
}

const Component1: React.FC<IProps> = ({ name, surname }) => {
  const [state, setState] = useState<Istate>({ name: "Dipesh", age: 36 });
  return (
    <div>
      <div>
        <h1>name: {name}</h1>
        <h2>surname: {surname}</h2>
      </div>
      <div>
        <h3>name:{state.name}</h3>
        <h4>age:{state.age}</h4>
      </div>
    </div>
  );
};

export default Component1;
