// import React, { useEffect, useState } from "react";

// export default function () {
//   const [count, setCount] = useState(0);
//   // const [counter, setData] = useState(0);

//   useEffect(() => {
//     console.log("hey");
//   }, [count]);

//   return (
//     <div>
//       <h1>Hello useeffect with props {count}</h1>
//       {/* <h1>Hello useEffect with props data {counter}</h1> */}
//       <button onClick={() => setCount(count + 1)}>Click count</button>
//       {/* <button onClick={() => setData(counter * 2)}>click data</button> */}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";

export default function ComponentWithCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count has changed:", count);
  }, [count]);

  return (
    <div>
      <h1>Hello useEffect with cleanup {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to increase count
      </button>
    </div>
  );
}
