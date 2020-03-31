import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Cart from "../../components/Overview/Cart/Cart";

export default function Banner() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  function showCart() {
    setModalShow(true);
    getLocalStorage();
  }

  function getLocalStorage() {
    let newCart = JSON.parse(localStorage.getItem("cart"));
    setCart(newCart);
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "black" }}
    >
      <div className="container jumbotronContainer">
        <h1 className="display-5">
          Forever404
          <span>
            <i className="fa fa-shopping-cart" onClick={() => showCart()}></i>
          </span>
          <Cart
            show={modalShow}
            onHide={() => setModalShow(false)}
            cart={cart}
          />
        </h1>
      </div>
      {/* <div id="specialOffer">
        <p>SITE WIDE ANNOUNCEMENT --- THIS IS THE GREATEST WEBSITE EVER</p>
      </div> */}
    </div>
  );
}

/* <div>
{this.props.salePrice ? (
  <p>NOW ${this.props.price - this.props.salePrice}</p>
) : (
  <p>${this.props.price}</p>
)}
<h3>STYLE > SELECTED STYLE</h3> */
