import React, { useState } from 'react';
import './T1.css';

export default function T1() {
    const[inputs,setInputs] = useState(  // for input's
        {
            FirstName : " ",
            LastName : " ",
        }
    );

    const handleChange = (event) =>{
        setInputs(
            {
              ...inputs,  // spread from js
              [event.target.name]:event.target.value,
            }
        );
        //console.log('helllo',event.target.value)
    };

    const [tabledata,setTableData]=useState([]);
    const [editClick,setEditclick]=useState(false); // edit false
    const [editIndex,setEditIndex] = useState(""); //edit

    const handleSubmit = (event) =>{
       event.preventDefault();
       //console.log("inputs",inputs); 
      if(editClick){
         const  tempTableData = tabledata;
         Object.assign(tempTableData[editIndex],inputs)
         setTableData([...tempTableData]);
         setEditclick(false);
         setInputs({
            FirstName : "",
            LastName : "" ,
        });
      }
      else{
        setTableData([...tabledata,inputs]);
        setInputs({
            FirstName : "",
            LastName : "" ,
        });
      } 
    };
    //console.log("tabledata",tabledata); 


    const handledelete = (index) => {
         const filterdata=tabledata.filter((item,i)=>i!==index)
         setTableData(filterdata);
    } 

    const handleEdit = (index) => {
        const tempData=tabledata[index];
        setInputs(
          { FirstName :tempData.FirstName,
            LastName :tempData.LastName});
        
        setEditclick(true); 
        setEditIndex(index);
    };

  return (
    <div>
      <div className="formdata">
        <form onSubmit={handleSubmit}>
          <label>FirstName</label>
          <input type="text" name="FirstName"  className="userfirstname" placeholder="FirstName" value={inputs.FirstName} onChange={handleChange} />

          <label>LastName</label>
          <input type="text" name="LastName" className="userlastname" placeholder="LastName" value={inputs.LastName} onChange={handleChange}/>

          <div style={{ width: '100%' }}>
            <input type="submit" value="Submit" className="button" />
            { editClick ? "update" : "Add" }
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
                {
                    tabledata.map((item,i)=>(
                        <tr>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <button onClick={()=>handleEdit(i)}>Edit</button>
                            <button onClick={()=>handledelete(i)}>delete</button>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}
