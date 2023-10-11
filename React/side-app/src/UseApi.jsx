import React, { useEffect, useState } from "react";

export default function UseApi() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setCount(resp);
      });
    });
  }, []);
  // console.log(count);
  return (
    <div>
      <h1>Hello, It's a UseApi</h1>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>Username</td>
            <td>email</td>
          </tr>
          {count.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
