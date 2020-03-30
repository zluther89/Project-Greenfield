import React from "react";

export default function ProductName(props) {
  return (
    <div>
      <p>Category: {props.category}</p>
      <h3>{props.name}</h3>
    </div>
  );
}
