import React, { useState } from "react";

export default function Crude1() {
  const [input, setInputs] = useState({
    firstname: "",
    lastname: "",
  });

  return (
    <center>
      <div>
        <h1>Crude Operation</h1>
        <form onSubmit={(event) => event.preventDefault}>
          <div>
            <label>Name :- </label>
            <input type="textbox" name="Name" placeholder="Enter the name" />
            <br />
            <br />
            <label>Last Name :- </label>
            <input
              type="name
            "
              name="email"
              placeholder="Enter the id"
            />
            <br />
            <br />
            <button style={{ marginRight: "2cm" }}>Add Data</button>
            <input type="checkbox" />
            <button>Select all</button>
            <button>Delete all</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>LastName</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </center>
  );
}
