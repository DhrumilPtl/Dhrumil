import React, { useState } from "react";

interface IInputs {
  firstname: string;
  secondname: string;
}

const Crude: React.FC = () => {
  const [inputs, setInputs] = useState<IInputs>({
    firstname: "",
    secondname: "",
  });

  const [tableData, setTableData] = useState<IInputs[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null); // Use null to represent no edit
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submit = () => {
    if (inputs.firstname.trim() === "" || inputs.secondname.trim() === "") {
      alert("Please enter the information");
      return;
    }
    if (editIndex !== null) {
      const editrow = [...tableData];
      editrow[editIndex] = { ...inputs };
      setTableData([...editrow]);
      setEditIndex(null);
    } else {
      setTableData([...tableData, { ...inputs }]);
    }
    setInputs({
      firstname: "",
      secondname: "",
    });
  };

  const deleterows = (index: number) => {
    const deletedData = [...tableData];
    deletedData.splice(index, 1);
    setTableData(deletedData);
  };

  const editrows = (index: number) => {
    const dataEdit = tableData[index];
    setInputs(dataEdit);
    setEditIndex(index);
  };

  const selectallbutton = () => {
    if (selectedRows.length === tableData.length) {
      setSelectedRows([]);
    } else {
      const allRows = Array.from(Array(tableData.length).keys());
      setSelectedRows(allRows);
    }
  };

  const deleteedbuttondata = () => {
    const filteredData = tableData.filter(
      (element, index) => !selectedRows.includes(index)
    );
    setTableData(filteredData);
    setSelectedRows([]);
  };

  const toggleRowSelection = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <center>
      <div>
        <h1>This is CRUD Operation</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter The name"
              value={inputs.firstname}
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Second Name:</label>
            <input
              type="text"
              name="secondname"
              placeholder="Enter the Name"
              value={inputs.secondname}
              onChange={handleChange}
            />
            <br />
            <br />
            <button
              onClick={submit}
              type="button"
              style={{ marginRight: "2cm" }}
            >
              Add Data
            </button>
            <input
              type="checkbox"
              onChange={selectallbutton}
              checked={
                selectedRows.length === tableData.length && tableData.length > 0
              }
            />
            <button onClick={selectallbutton}>Select All</button>
            <button onClick={deleteedbuttondata}>Delete All</button>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Checkboxes</th>
              <th>Action Buttons</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstname}</td>
                <td>{data.secondname}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => toggleRowSelection(index)}
                  />
                </td>
                <td>
                  <button onClick={() => editrows(index)}>update</button>
                  <button onClick={() => deleterows(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default Crude;
