import React, { useState } from 'react';
import './T1.css';

export default function T1() {
  const [inputs, setInputs] = useState({
    FirstName: '',
    LastName: '',
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const [tabledata, setTableData] = useState([]);  // tabledata is state varriable and the  setTabledata is for update the value and use state  in state hook ,[] for empty Array
  const [editClick, setEditClick] = useState(false); // 
  const [editIndex, setEditIndex] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputs.FirstName === '' || inputs.LastName === '') {
      alert('Please enter FirstName and LastName');
      return;
    }

    if (editClick) { // Check if in edit mode
      const tempTableData = [...tabledata];
      Object.assign(tempTableData[editIndex], inputs); // Update the specific row with edited data
      setTableData(tempTableData);
      setEditClick(false); // Exit edit mode
      setEditIndex('');
    } else { // Add new data
      setTableData([...tabledata, inputs]);
    }

    setInputs({ // Reset input fields
      FirstName: '',
      LastName: '',
    });
  };

  const handleDelete = (index) => {
    if (editClick && editIndex === index) { // Check if deleting the row currently being edited
      setEditClick(false); // Exit edit mode
      setEditIndex('');
    } else { // Delete the row
      const filterData = tabledata.filter((item, i) => i !== index); // Filter out the row to be deleted
      setTableData(filterData);
    }
  };

  const handleEdit = (index) => {
    const tempData = tabledata[index];
    setInputs({ // Set input fields with the data of the selected row for editing
      FirstName: tempData.FirstName,
      LastName: tempData.LastName,
    });
    setEditClick(true); // Enter edit mode
    setEditIndex(index);
  };

  return (
    <div>
      <div className="formdata">
        <form onSubmit={handleSubmit}>
          <label>FirstName</label>
          <input
            type="text"
            name="FirstName"
            className="userfirstname"
            placeholder="FirstName"
            value={inputs.FirstName}
            onChange={handleChange}
          />

          <label>LastName</label>
          <input
            type="text"
            name="LastName"
            className="userlastname"
            placeholder="LastName"
            value={inputs.LastName}
            onChange={handleChange}
          />

          <div style={{ width: '100%' }}>
            <input type="submit" value="Submit" className="button" />
            {editClick ? 'Update' : 'Add'} {/* Display 'Update' or 'Add' based on edit mode */}
          </div>
        </form>
      </div>
      <div className="display_table">
        <center>
          <table id="userList" className="W-fulll text-center">
            <tbody>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Action</th>
              </tr>
            </tbody>
            <tbody>
              {tabledata.map((item, i) => (
                <tr key={i}>
                  <td>{item.FirstName}</td>
                  <td>{item.LastName}</td>
                  <td>
                    <button onClick={() => handleEdit(i)}>Edit</button>
                    <button onClick={() => handleDelete(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}
