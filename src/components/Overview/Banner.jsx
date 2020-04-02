import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Cart from "../../components/Overview/Cart/Cart";

export default function Banner() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "black" }}
    >
      <div className="container jumbotronContainer">
        {" "}
        <h1 className="display-5">
          Forever404
          <span>
            <i
              className="fa fa-shopping-cart"
              id="cartIcon"
              onClick={() => setModalShow(true)}
            ></i>
            <p id="companySlogan">
              can't find what you're looking for, let us help
            </p>
          </span>
          <Cart show={modalShow} onHide={() => setModalShow(false)} />
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
