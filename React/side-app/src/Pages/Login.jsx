import React, { useState } from "react";
export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setFirstName("");
    setSecondName("");
  };

  const Delete = () => {};
  return (
    <div>
      <center>
        <h1>Login Form</h1>
        <label>First Name:- </label>
        <input
          type="text"
          value={firstName}
          placeholder="enter the name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <label>Second Name:- </label>
        <input
          type="text"
          value={secondName}
          placeholder="enter the second name"
          onChange={(e) => setSecondName(e.target.value)}
        />
        <br />
        <br />
        <button onClick={submit}> Submit </button>
        <nbsp/> <nbsp/>
        <button onClick={Delete}>Delete</button>
      </center>
    </div>
  );
}
