import React, { useState } from "react";

export default function BagProduct(props) {
  const [isDeleted, setStatus] = useState(false);

  async function changeCart() {
    setStatus(true);
    let cart = await JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = [];
    }

    let newCart = await cart.filter(
      (el) => JSON.stringify(el) !== JSON.stringify(props.content)
    );

    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return isDeleted ? (
    <div></div>
  ) : (
    <p>
      {`Product: ${props.content[4]} Style: ${props.content[3]}    Size: ${props.content[1]}    Quantity: ${props.content[0]} Price: ${props.content[5]}`}
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
