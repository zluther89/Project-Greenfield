import React from "react";

export default function ProductName(props) {
  return (
    <div>
      <p>Category: {props.category}</p>
      <h3>{props.name}</h3>
      {props.salePrice ? (
        props.price === props.salePrice ? (
          <p>Price: ${props.price}</p>
        ) : (
          <p> New Price: ${props.price - props.salePrice}</p>
        )
      ) : (
        <p>Price: ${props.price}</p>
      )}

      {props.currentStyle ? (
        <p>Selected Style > {props.currentStyle}</p>
      ) : (
        <p>Style > Select Style</p>
      )}
    </div>
  );
}
