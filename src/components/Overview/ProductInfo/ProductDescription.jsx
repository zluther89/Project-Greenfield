import React from "react";

export default function ProductDescription(props) {
  return (
    <div>
      <h3>{props.data.slogan}</h3>
      <p>{props.data.description}</p>
    </div>
  );
}
