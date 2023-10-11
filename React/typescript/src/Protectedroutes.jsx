import React from "react";

export default function Protectedroutes(props) {
  const { component } = props;
  return <div>abc
     <component/>
  </div>;
}
