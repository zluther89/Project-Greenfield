import React, { useState, useEffect } from "react";

export default function BagProduct(props) {
  const [isDeleted, setStatus] = useState(false);
  function changeCart() {
    setStatus(true);
    let cart = JSON.parse(localStorage.getItem("cart"));

    let newCart = cart.filter(
      el => JSON.stringify(el) !== JSON.stringify(props.content)
    );
    console.log("new cart", newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return isDeleted ? (
    <div></div>
  ) : (
    <p>
      {`Product: ${props.content[4]} Style: ${props.content[3]}    Size: ${props.content[1]}    Quantity: ${props.content[0]}`}
      {"     "}
      <span>
        {" "}
        {"         "}
        <button
          onClick={() => {
            changeCart();
          }}
        >
          Remove
        </button>
      </span>
    </p>
  );
}
