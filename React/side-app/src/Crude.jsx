import React, { useState } from "react";

export default function Crude() {
  const [tableData, setTableData] = useState([]);
  const [update,setUpdate] = useState("");
  const [input, setInputs] = useState({
    fname: "",
    lname: "",
  });
  const handelChange = (e) => {
    setInputs({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (input.fname === "" || input.lname === " ") {
      alert("Enter the name");
      // return;
    }

    setTableData([...tableData, input]);
    setInputs({
      fname: " ",
      lname: " ",
    });
  };

  const remove = (index) => {
    const a = [...tableData];
    a.splice(index, 1);
    setTableData(a);
  };
  const edit = (index) => {
    const b = [...tableData];
    b.(index,1);
    setTableData(b);
  };

  return (
    <div>
      <h1>Crude Operation</h1>
      <form onSubmit={handelSubmit}>
        <label>First Name :- </label>
        <input
          type="Text"
          placeholder="Enter the name"
          value={input.fname}
          name="fname"
          onChange={handelChange}
        />
        <br />
        <br />
        <label>Second Name :- </label>
        <input
          type="text"
          placeholder="Enter the name"
          value={input.lname}
          name="lname"
          onChange={handelChange}
        />
        <br />
        <br />
        <button type="add">Submit</button>
      </form>
      <center>
        <table>
          <thead>
            <tr>
              <th>FName</th>
              <th>LName</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, data) => (
              <tr Key={data}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>
                  <button onClick={edit}>Edit</button>
                  <button onClick={remove}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
