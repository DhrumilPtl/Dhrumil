import React from "react";

interface IProps {
  name: string;
  surname: string;
  age: number;
}

const Class: React.FC<IProps> = ({ name, surname, age }) => {
  return (
    <div>
       <h1>name: {name}</h1>
       <h2>surname: {surname}</h2>
       <h3>age: {age}</h3>
    </div>
  );
}

export default Class;
