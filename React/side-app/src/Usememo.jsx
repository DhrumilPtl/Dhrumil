import React, { useMemo, useState } from "react";

export default function Usememo() {
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("***********");
      return plus * 10;
    },
    [plus]
  );

  return (
    <div>
      <h1>It's Usememo</h1>
      {multiplication}
      <br />
      <button onClick={() => setPlus(plus + 1)}>Plus</button>
      <span>{plus}</span>
      <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>Minus</button>
      <span>{minus}</span>
    </div>
  );
}
