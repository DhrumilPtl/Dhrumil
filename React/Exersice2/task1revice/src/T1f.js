// import React, { useState } from 'react';
// import './T1f.css';  

// export default function T1f() {
//   const [data, setData] = useState([]); // Step 1: Set up component state // data represents the state variable that holds the array of records.
//                                         // setData is a function used to update the value of the data state variable.
//   const [editIndex, setEditIndex] = useState(-1); // Set up edit index state
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');

//     //  let firstName = firstNameInput.value.trim(); // remove white spaces
//     //  let lastName = lastNameInput.value.trim(); // remove white spaces const createRecord = () => {
//     // const firstNameInput = document.querySelector('.userfirstname'); // insert fname and lastname 
//     // const lastNameInput = document.querySelector('.userlastname');
//          const createRecord = () => {
//          if (firstName === '' || lastName === '') 
//          {
//            alert('please fill the information');
//            return;
//          }
//     // Remove spaces from first name and last name
  
//     firstName = firstName.replace(/\s+/g, ''); //  used to remove any spaces from the input values before adding them to the table.
//     lastName = lastName.replace(/\s+/g, ''); //    used to remove any spaces from the input values before adding them to the table.
//                                               //   g for global , / for  starting regex and \s for matches any whitespace character ..

//              const newRecord = 
//              {  // add new fn and ln like fN = fn and lN = ln  
//                firstName :firstName.trim(),
//                lastName : lastName.trim(),
//              };

//     if (editIndex === -1) 
//     {
//       // Creating a new record
//       setData([...data, newRecord]); // newRecord is a function and ... is basically spread operator for  update the data 
//     } else 
//     {
//       // Updating an existing record
//       const updatedRecords = [...data]; // store in varriavble  
//       updatedRecords[editIndex] = newRecord; // newRecords is use for assigned the specifiic index of updateindex
//       setData(updatedRecords); // update data with updatedRecords
//       setEditIndex(-1); // Reset editIndex
//     } // This step is necessary to indicate that we are no longer editing any specific record after the update is performed

//     // firstNameInput.value = '';
//     // lastNameInput.value = '';

//     setFirstName('');
//     setLastName('');
//   }

//   // for delete button
//   const deleteRecord = (index) => {  // identify specific record to delete from array
    
//     if (index === editIndex) {
//         const confirmDelete = window.confirm(  // is js G.O 
//           'Are you sure you want to delete the record ?'
//         );
//         if (!confirmDelete) {  // check the button true & false
//           return; // Abort the deletion if the user cancels
//         }
//         setEditIndex(-1); // Reset editIndex if the record being edited is deleted
//       };
    
   
//     const updatedRecords = [...data]; // we are not directly modifying the original array but working with a new array.
//     updatedRecords.splice(index, 1); // splice  is use for remove some element's from updatedrecord 
//     setData(updatedRecords); // update setdata for modify data with updatedRecords
//   };

//   const updateRecord = (index) => {
//     // retrives the record object from '...data' at index
//     const record = data[index];
//     // set the value from firstName 
//     setFirstName(record.firstName);
//     setLastName(record.lastName);
//     // update state varriable 'editindex' at uppsite with index
//     setEditIndex(index);
//   }

//   return (
//     <div>
//       <div className="userpage">
//         <div className="formdata">
//           <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
//             <label>FirstName</label>
//             <input type="text" 
//             className="userfirstname" 
//             placeholder="FirstName" value={firstName}
//               onChange={(event) => setFirstName(event.target.value)} />

//             <label>LastName</label>
//             <input type="text" className="userlastname" placeholder="LastName"  value={lastName}
//             onChange={(event) => setLastName(event.target.value)} />

//             <div style={{ width: '100%' }}>
//               <input type="submit" value="Submit" className="button" onClick={createRecord} />
//             </div>
//           </form>
//         </div>
//         <div className="display_table">
//           <table className="list" id="userList">
//             <thead>
//               <tr>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Action</th>
//               </tr>
//             </thead>

//             {/* Step : 3 */}

//             <tbody>
//               {data.map((record, index) => ( // record is represent the current element and index is represent the index of elements in th Erray
//                 <tr key={index}>     
//                   <td>{record.firstName}</td>  
//                   <td>{record.lastName}</td>
//                   <td>
//                     <button onClick={() => updateRecord(index)}>Update</button>  
//                     <button onClick={() => deleteRecord(index)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
//   }








import React, { useState } from 'react';
import './T1f.css';

export default function T1f() {
  const [data, setData] = useState([]);
  // Step 1: Set up component state // data represents the state variable that holds the array of records.
                                        // setData is a function used to update the value of the data state variable.
  const [editIndex, setEditIndex] = useState(-1);
  const [firstName, setFirstName] = useState('');  // same as
  const [lastName, setLastName] = useState(''); // value is lastname

  const createRecord = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('please fill the information');
      return;
    }

    const newRecord = {
      firstName: firstName,
      lastName: lastName,
    };

    if (editIndex === -1) {
      setData([...data, newRecord]);
    } else {
      const updatedRecords = [...data];
      updatedRecords[editIndex] = newRecord; // newRecords is use for assigned the specifiic index of updateindex
      setData(updatedRecords);  // update data with updatedRecords
      setEditIndex(1); // for update press edit button then thy called with new record
    }

    setFirstName('');
    setLastName('');
  };

  const deleteRecord = (index) => {
    if (index === editIndex) {
      const confirmDelete = window.confirm('Are you sure you want to delete the record?');
      if (!confirmDelete) {
        return;
      }
      setEditIndex(-1);
    }

    const updatedRecords = [...data]; // we are not directly modifying the original array but working with a new array.
    updatedRecords.splice(index, 1);  // // splice  is use for remove some element's from updatedrecord 
    setData(updatedRecords);  // update setdata for modify data with updatedRecords
  };

  const updateRecord = (index) => {
    const record = data[index];  // retrives the record object from '...data' at index
    setFirstName(record.firstName);
    setLastName(record.lastName);
    setEditIndex(index);     // update state varriable 'editindex' at uppsite with index
  };

  return (
    <div>
      <div className="userpage">
        <div className="formdata">
        {/* is js keyword for data store */}
          <form onSubmit={(event) => event.preventDefault()}> 
            <label>FirstName</label>
            <input
              type="text"
              className="userfirstname"
              placeholder="FirstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />

            <label>LastName</label>
            <input
              type="text"
              className="userlastname"
              placeholder="LastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />

            <div style={{ width: '100%' }}>
              <input type="submit" value="Submit" className="button" onClick={createRecord} />
            </div>
          </form>
        </div>
        <div className="display_table">
          <table className="list" id="userList">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((record, index) => ( // record is represent the current element and index is represent the index of elements in th Erray
                <tr key={index}>
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>
                    <button onClick={() => updateRecord(index)}>Update</button>
                    <button onClick={() => deleteRecord(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

