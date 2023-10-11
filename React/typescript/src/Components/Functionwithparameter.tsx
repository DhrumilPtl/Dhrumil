import React, { useState } from "react";
interface Istate {
  message: String;
}

const Functionwithparameter: React.FC = () => {
  const [state, setState] = useState<Istate>({ message: "Welcome" });
  const changemessage = (greet: string): void => {
    // string for message is in string
    setState({ message: greet });
  };

  return (
    <center>
      <>
        <h1>message is : {state.message}</h1>
        <button onClick={() => changemessage("Like")}>Like</button>
        <br />
        <button onClick={() => changemessage("Share")}>Share</button>
        <br />
        <button onClick={() => changemessage("Subscribe")}>subscribe</button>
      </>
    </center>
  );
};

export default Functionwithparameter;
